import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header, Footer } from "@/components";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Andrews Ampadu",
  description: "My Portfolio",
  icons:{
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8dhQaWLvSrNA8d3hvZLdryEfs4q3EjiQeohrdVsHBYs" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LFBY2BJJ4F"></Script>
<Script id="ga-script" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LFBY2BJJ4F')`};
</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
