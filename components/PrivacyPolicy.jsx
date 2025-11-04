import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // If you want Footer on Privacy Policy page

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar /> {/* Add Navbar for navigation */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-slate-700">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Introduction</h2>
          <p>
            At Prime Heaven, we value your privacy and are committed to protecting your personal information. This Privacy Policy
            outlines how we collect, use, and protect your data when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, shipping address, and payment details when
            you make a purchase or interact with our website. Additionally, we may collect non-personal information such as browsing
            behavior, IP address, and device information.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">How We Use Your Information</h2>
          <p>
            The information we collect is used to process orders, communicate with you, provide customer support, improve our services, and
            send you promotional offers. We will not sell or share your personal information with third parties, except where necessary
            for completing transactions or as required by law.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">Data Protection</h2>
          <p>
            We implement security measures to protect your personal data from unauthorized access, alteration, or destruction. All sensitive
            information (such as credit card details) is encrypted using SSL (Secure Socket Layer) technology.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to improve your browsing experience. These technologies may collect
            information about your browsing behavior and preferences. You can control the use of cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please
            contact us via the contact information provided below. We will respond to your request in accordance with applicable laws.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When changes are made, we will update the "Last Updated" date at the top of
            this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your personal information, feel free to contact us at:
          </p>
          <p>Email: support@primeheaven.com</p>
        </div>
      </section>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default PrivacyPolicy;
