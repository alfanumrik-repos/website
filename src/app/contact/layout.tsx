import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Alfanumrik',
  description: "Get in touch with the Alfanumrik team. We're here to help.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
