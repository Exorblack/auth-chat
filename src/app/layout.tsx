import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth-chat",
  description: "auth chat project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
          >
          <Toaster richColors position="top-center" />

          <main>{children}</main>

          </ThemeProvider>
      </body>
    </html>
  );
}
