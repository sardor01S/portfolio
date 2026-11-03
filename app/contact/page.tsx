import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact | Sardorbek Ismatov",
  description: "Contact Sardorbek Ismatov about Junior Frontend Developer opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
}
