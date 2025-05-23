import { ContactForm } from "@/components/organisms/ContactForm";
import { Suspense } from "react";
import Script from "next/script";
import { contactSchema } from "@/schemas/contactSchema";

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <main
        className="flex items-center justify-center px-4 py-2 pt-0 md:pt-16"
        role="main"
        aria-label="Contact Julia Halpin Systemic Psychotherapy"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </main>
    </>
  );
}
