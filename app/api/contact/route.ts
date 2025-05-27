import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import {
  rateLimit,
  sanitizeInput,
  validateEmail,
  validatePhone,
  validateMessage,
  verifyHCaptcha,
} from "../middleware";

// Development-only logging helper
const devLog = (message: string, error?: unknown) => {
  if (process.env.NODE_ENV === "development") {
    if (error) {
      console.error(message, error);
    } else {
      console.log(message);
    }
  }
};

export async function POST(request: Request) {
  try {
    // Get IP address for rate limiting
    const headersList = await headers();
    const ip = (headersList.get("x-forwarded-for") || "unknown-ip").split(
      ","
    )[0];

    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    devLog("Received form data:", { ...body, captchaToken: "REDACTED" });

    const {
      firstName,
      lastName,
      email,
      phone,
      enquiryType,
      message,
      captchaToken,
    } = body;

    if (!captchaToken) {
      devLog("No captcha token provided");
      return NextResponse.json(
        { error: "Captcha token is required" },
        { status: 400 }
      );
    }

    // Verify hCaptcha
    devLog("Verifying hCaptcha token...");
    const isValidCaptcha = await verifyHCaptcha(captchaToken);
    if (!isValidCaptcha) {
      devLog("hCaptcha verification failed");
      return NextResponse.json(
        { error: "Invalid captcha. Please try again." },
        { status: 400 }
      );
    }
    devLog("hCaptcha verification successful");

    // Validate and sanitize inputs
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (!validateMessage(message)) {
      return NextResponse.json(
        { error: "Invalid message content" },
        { status: 400 }
      );
    }

    // Sanitize all text inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : undefined,
      enquiryType,
      message: sanitizeInput(message),
    };

    // Format the message
    const enquiryTypeFormatted = sanitizedData.enquiryType
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const emailContent = `
      New Contact Form Submission
      
      From: ${sanitizedData.firstName} ${sanitizedData.lastName}
      Email: ${sanitizedData.email}
      Phone: ${sanitizedData.phone || "Not provided"}
      Type of Enquiry: ${enquiryTypeFormatted}
      
      Message:
      ${sanitizedData.message}
    `;

    // Check if EMAIL_PASS is set
    if (!process.env.EMAIL_PASS) {
      devLog(
        "Development mode: Email would have been sent with the following content:",
        emailContent
      );

      // In development, just return success without actually sending email
      if (process.env.NODE_ENV === "development") {
        return NextResponse.json(
          {
            message: "Email simulation successful (development mode)",
            debug: {
              emailContent,
              to: "julia.halpin@familyandcoupletherapyservices.co.uk",
              from: "julia.halpin@familyandcoupletherapyservices.co.uk",
              subject: `New ${enquiryTypeFormatted} Enquiry from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
              replyTo: sanitizedData.email,
            },
          },
          { status: 200 }
        );
      }

      devLog("EMAIL_PASS environment variable is not set");
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    // Create transporter with ImprovMX settings
    const transporter = nodemailer.createTransport({
      host: "smtp.improvmx.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: "julia.halpin@familyandcoupletherapyservices.co.uk",
        pass: process.env.EMAIL_PASS,
      },
    });

    devLog("Attempting to send email...");
    // Send email
    await transporter.sendMail({
      from: "julia.halpin@familyandcoupletherapyservices.co.uk",
      to: "julia.halpin@familyandcoupletherapyservices.co.uk",
      subject: `New ${enquiryTypeFormatted} Enquiry from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      text: emailContent,
      replyTo: sanitizedData.email,
    });
    devLog("Email sent successfully");

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    devLog("Error in contact API:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
