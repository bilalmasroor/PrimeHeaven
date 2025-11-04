import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Us | Prime Heaven",
};

export default function AboutPage() {
  return (
    <main>
        <Navbar></Navbar>
      <AboutUs />
      <Footer></Footer>
    </main>
  );
}
