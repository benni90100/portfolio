
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <main className="bg-background max-w-screen m-auto flex justify-center ">

        {children}
    </main>

      </>
  );
}
