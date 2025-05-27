import validator from "validator";
import xss from "xss";

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const ipRequests = new Map<string, { count: number; timestamp: number }>();

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const requestData = ipRequests.get(ip);

  if (!requestData) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (requestData.count >= MAX_REQUESTS) {
    return false;
  }

  requestData.count++;
  return true;
}

export function sanitizeInput(input: string): string {
  return xss(validator.trim(input));
}

export function validateEmail(email: string): boolean {
  return validator.isEmail(email);
}

export function validatePhone(phone: string | undefined): boolean {
  if (!phone) return true;
  return validator.isMobilePhone(phone, "any");
}

export function validateMessage(message: string): boolean {
  // Check message isn't too long and contains actual content
  return (
    validator.isLength(message, { min: 10, max: 1000 }) &&
    !validator.isEmpty(message) &&
    !containsSpamPatterns(message)
  );
}

function containsSpamPatterns(text: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|porn|sex|xxx)\b/i,
    /\b(buy|sell|cheap|discount|offer|price)\b.*\b(now|today|limited)\b/i,
    /\b(win|winner|prize|lottery|congratulation)\b/i,
    /(https?:\/\/[^\s]+)/g,
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
  ];

  return spamPatterns.some((pattern) => pattern.test(text));
}

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

export async function verifyHCaptcha(token: string): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET_KEY;

  if (!secret) {
    devLog("HCAPTCHA_SECRET_KEY is not set");
    return false;
  }

  try {
    const response = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `response=${token}&secret=${secret}`,
    });

    const data = await response.json();

    if (!data.success) {
      devLog("hCaptcha verification failed", data);
      return false;
    }

    return true;
  } catch (error) {
    devLog("Error verifying hCaptcha", error);
    return false;
  }
}
