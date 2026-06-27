import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO } from "@/lib/seo-utils";
import { publicRoutes } from "@/lib/site-metadata";

type PageLayoutProps = {
  path: string;
  children: ReactNode;
  imageAlt?: string;
};

const PageLayout = ({ path, children, imageAlt = "CraftCode - tecnologia e IA aplicada" }: PageLayoutProps) => {
  const route = publicRoutes.find((item) => item.path === path)!;

  return (
    <div className="min-h-screen">
      <SEO
        title={route.title}
        description={route.description}
        canonical={route.canonicalPath}
        openGraph={{
          type: "website",
          images: [
            {
              url: "/images/og-craftcode.png",
              alt: imageAlt,
              width: 1200,
              height: 630,
            },
          ],
        }}
        twitter={{
          card: "summary_large_image",
          imageAlt,
        }}
      />
      <Header />
      <main className="pt-14 md:pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;
