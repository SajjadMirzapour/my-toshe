import "@/styles/globals.css";
import type { Metadata } from "next";
import Footer from "@/ui/Footer/footer";
import Header from "@/ui/Header/header";
import FixedIcons from "@/ui/FixedIcons/fixedIcons";
import { yekanFont } from "@/fonts/fonts";
import ThemeProvider from "@/lib/provider/themeProvider";
import DashboardProvider from "@/ui/DashboardProvider/dashboardProvider";
import Container from "@/ui/Container/container";
// import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "توشه من",
  description: "فروشگاه آنلاین",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const cookie = cookies();
  // const myTheme = cookie.get("theme")?.value;

  // const myTheme = document.cookie.split("; ").find((cookie) => cookie.startsWith("theme"))?.split("=")[1]
  // console.log("myTheme", myTheme);
  // const myTheme = document.cookie

  return (
    <html className={yekanFont.className} lang="fa">
      <body className="dark:bg-[#1B1F2B] dark:text-[white]">
        {/* <DashboardProvider >
          {children}
        </DashboardProvider > */}
        <Container >
          {children}
        </Container >
        <FixedIcons />
        <Footer />
      </body>
    </html>
  );
}
