
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar isLoggedIn={false}/>
        {children}
        <Footer/>
      </>
  );
}
