"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./swiper-bundle.min.css";
import "./ReactToastify.css";
import "./globals.css";
import Header from "@/components/menu-header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// const GA_TRACKING_ID = "G-YHQN8G9ZWP";

// const pageview = (url) => {
//   window.gtag("config", GA_TRACKING_ID, {
//     page_path: url,
//   });
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter =
    pathname === "/questionnaire" || pathname === "/questionnaire.html";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   pageview(pathname);
  // }, [pathname]);

  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
        <meta
          name="google-site-verification"
          content="C789duYBhuJ1gU7r7Fk0lujzsZjVAp0VZSR79BSPG4E"
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head> */}
      <body className={`bg-dark ${inter.className}`}>
        {!hideHeaderFooter && <Header />}
        <div>{children}</div>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
