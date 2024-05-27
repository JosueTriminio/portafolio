import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { Header } from "./components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josue Triminio Portfolio",
  description: "desarrollo de sitios y paginas web web developer",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body className={`${inter.className} `}>
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>

  );
}
