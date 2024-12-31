import { Geist, Geist_Mono ,Edu_VIC_WA_NT_Beginner} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const geistSans = Edu_VIC_WA_NT_Beginner({
weight:["400"],
style:"normal",
variable: "--font-geist-sans",
subsets: ["latin"],

});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-[100vh] w-full`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}