"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import { Button } from "../atoms/Button";

export type EnquiryType =
  | "supervision"
  | "consultation"
  | "general"
  | "family-therapy"
  | "couple-therapy";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  enquiryType: EnquiryType;
  message: string;
}

export const ContactForm = () => {
  const searchParams = useSearchParams();
  const urlEnquiryType = searchParams.get("type") as EnquiryType | null;
  const initialEnquiryType =
    urlEnquiryType &&
    [
      "family-therapy",
      "couple-therapy",
      "supervision",
      "consultation",
      "general",
    ].includes(urlEnquiryType)
      ? urlEnquiryType
      : "general";

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: initialEnquiryType,
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      enquiryType: initialEnquiryType,
      message: "",
    });
  };

  const inputStyles =
    "block w-full rounded-md border-lavender-200 shadow-sm focus:border-lavender-300 focus:ring-lavender-300 text-ivory-50 bg-gold-600/50 font-main placeholder-indigo-50 text-lg px-4";
  const labelStyles = "block font-secondary text-ivory-50 text-lg";
  const helperTextStyles = "ml-2 text-ivory-50";

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-indigo-900/80 backdrop-blur-sm rounded-2xl shadow-xl my-8">
      <div className="text-center mb-2">
        <Title size="3xl" colour="ivory" weight="bold">
          Get in Touch
        </Title>
        <BodyText size="lg" colour="ivory">
          Please fill in the form below and I will get back to you as soon as
          possible.
        </BodyText>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelStyles}>
              First Name <span className={helperTextStyles}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              placeholder="Your first name"
              className={`${inputStyles} mt-2 py-3`}
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelStyles}>
              Last Name <span className={helperTextStyles}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              required
              placeholder="Your last name"
              className={`${inputStyles} mt-2 py-3`}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email <span className={helperTextStyles}>*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className={`${inputStyles} mt-2 py-3`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Phone <span className="ml-2 text-lavender-100">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              className={`${inputStyles} mt-2 py-3`}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="enquiryType" className={labelStyles}>
            Type of Enquiry <span className={helperTextStyles}>*</span>
          </label>
          <select
            id="enquiryType"
            required
            className={`${inputStyles} mt-2 py-3`}
            value={formData.enquiryType}
            onChange={(e) =>
              setFormData({
                ...formData,
                enquiryType: e.target.value as EnquiryType,
              })
            }
          >
            <option
              className="bg-gold-700 text-ivory-50"
              value="family-therapy"
            >
              Family Therapy
            </option>
            <option
              className="bg-gold-700 text-ivory-50"
              value="couple-therapy"
            >
              Couple Therapy
            </option>
            <option className="bg-gold-700 text-ivory-50" value="supervision">
              Supervision
            </option>
            <option className="bg-gold-700 text-ivory-50" value="consultation">
              MSc Student Consultation
            </option>
            <option className="bg-gold-700 text-ivory-50" value="general">
              General Enquiry
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelStyles}>
            Message <span className={helperTextStyles}>*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Please tell me a bit about what you'd like help with..."
            className={`${inputStyles} mt-2`}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" variant="primary" size="medium" darkBg>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};
