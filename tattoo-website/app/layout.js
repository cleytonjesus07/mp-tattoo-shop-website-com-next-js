
import "./globals.css";
import Header from "@/components/Header";
import BgTitle from "@/components/BgTitle";
import Footer from "@/components/Footer";
import { inter_default } from "@/fonts";


export const metadata = {
  title: "Sandro Luz Tatto Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter_default.className}>
        <main className="m-10 mb-0">
          <Header />
          <BgTitle />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
