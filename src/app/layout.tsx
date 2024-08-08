// import Descope AuthProvider
import { AuthProvider } from '@descope/nextjs-sdk';
export const metadata = {
  title: "Pinecone - Vercel AI SDK Example",
  description: "Pinecone - Vercel AI SDK Example",
};

import "../global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID as string}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
