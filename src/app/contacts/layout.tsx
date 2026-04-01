import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться для записи на консультацию по подбору ухода за кожей и разбору составов.",
  alternates: {
    canonical: getCanonicalPath("/contacts"),
  },
};

export default function ContactsLayout({ children }: { children: ReactNode }) {
  return children;
}
