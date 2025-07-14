
import "./globals.scss";
import Layout from "../components/home/shared/layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className="font-sans"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}
