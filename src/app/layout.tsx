import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  display: "swap", 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap", 
});

export const metadata: Metadata = {

  title: {

    default: "FIERLAH AGENCY | Transformation Digitale & Marketing Dakar",

    template: "%s | FIERLAH AGENCY"

  },

  description: "Agence Marketing Digital 360° au Sénégal. Création de Sites Web, Publicité Meta Ads et Stratégie. Lancez votre projet avec 0 FCFA d'acompte.",

  keywords: ["Agence Marketing Dakar", "Création Site Web Sénégal", "Publicité Facebook Dakar", "Agence Digitale Afrique", "FIERLAH"],

  openGraph: {

    type: "website",

    locale: "fr_FR",

    url: "https://fierlah.com",

    siteName: "FIERLAH AGENCY",

  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} font-sans antialiased transition-colors duration-500 selection:bg-cosmos-cyan selection:text-black`}>
        {/* THEME PROVIDER : Dark par défaut, forcé */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false} // Désactive la détection système pour forcer le choix par défaut
          disableTransitionOnChange
        ><Preloader />
          <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground transition-colors duration-500">
            
            {/* FOND AURORA VIVANT */}
            {/* En mode nuit: normal. En mode jour: un peu plus subtil mais coloré */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
               {/* Tache 1 (Cyan) */}
               <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] animate-aurora-1 mix-blend-screen dark:mix-blend-normal opacity-50 dark:opacity-30" />
               {/* Tache 2 (Violet) */}
               <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] animate-aurora-2 mix-blend-screen dark:mix-blend-normal opacity-50 dark:opacity-30" />
            </div>

            <Navbar />
            
            <main className="flex-1 relative z-10 pt-28 md:pt-32">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>

        {/* JSON-LD / Schema.org (Identique à avant) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "FIERLAH AGENCY",
              "image": "https://fierlah-agency.com/assets/images/logo.png",
              "url": "https://fierlah-agency.com",
              "telephone": "+221789900790",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dakar",
                "addressCountry": "SN"
              }
            })
          }}
        />
      </body>
    </html>
  );
}