import type { Metadata } from "next";
import "./globals.css";
import { orbitron, rajdhani } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import StarField from "@/components/animations/StarField"; // AJOUT ICI
import Navbar from "@/components/layout/Navbar"; // <-- Importez la Navbar
import Footer from "@/components/layout/Footer";
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
      <body className={`${orbitron.variable} ${rajdhani.variable} antialiased bg-cosmos-bg text-white selection:bg-cosmos-cyan selection:text-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <StarField />
            <Navbar />
            
            {/* CORRECTION ICI : J'ai ajouté 'pt-28 md:pt-32' 
                Cela pousse tout le contenu vers le bas (112px mobile / 128px PC) 
                pour qu'il ne soit jamais caché par la barre de menu.
            */}
            <main className="flex-1 relative z-10 pt-28 md:pt-32">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
