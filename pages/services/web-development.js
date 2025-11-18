import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Web Development & Design</h1>
        <p className="text-gray-700 mb-6">
         We build impactful, user-friendly websites designed to attract, engage, and convert. Our team blends modern UI/UX design with powerful backend development to deliver websites that look great and perform flawlessly across all devices.
        </p>
        <h3 className="font-semibold mb-2">What we offer</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Corporate & Business Websites</strong> – Professionally designed websites that build credibility and enhance brand identity.</li>
          <li><strong>eCommerce Stores</strong> – Secure, fast, and conversion-optimized online stores with payment gateways and product management.</li>
          <li><strong>Web Portals & Dashboards</strong> – Customized portals for operations, analytics, and team collaboration.</li>
          <li><strong>UI/UX Design & Prototyping</strong> – Wireframes, mockups, and visually appealing user journeys.</li>
          <li><strong>Website Redesign & Optimization</strong> – Transform outdated sites into modern, high-performance platforms.</li>
          <li><strong>SEO Services</strong> – Boost visibility, improve rankings, and attract target customers organically.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
