import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Advanced Developers",
  description:
    "Discuss a custom home, duplex or multi-dwelling project with Advanced Developers — Sydney and the Central Coast.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/contact",
  },
  openGraph: {
    title: "Contact | Advanced Developers",
    description:
      "Discuss a custom home, duplex or multi-dwelling project with Advanced Developers — Sydney and the Central Coast.",
    url: "https://www.advanceddevelopers.com.au/contact",
  },
  twitter: {
    title: "Contact | Advanced Developers",
    description:
      "Discuss a custom home, duplex or multi-dwelling project with Advanced Developers — Sydney and the Central Coast.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
