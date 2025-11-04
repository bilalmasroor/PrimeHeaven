import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | Prime Heaven",
};

export default function ContactPage() {
  return (
    
      <main>
        <Navbar></Navbar>
        <ContactForm />
        <Footer></Footer>
      </main>
    
  );
}
