import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import RUDRA from '/public/rudra-pic.jpg';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudra Mondal",
  description: "Rudra Mondal Full-Stack Developer. I'm a passionate full-stack developer with a strong background in building modern, responsive, and scalable web applications. I love exploring new technologies and continuously learning to improve my skills.",
  image: RUDRA.src,
  url: "https://rudra.dev",
  type: "website",
  logo: RUDRA.src,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
