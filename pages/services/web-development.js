import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Web Development & Design</h1>
        <p className="text-gray-700 mb-6">
          Corporate & business websites, eCommerce stores, web portals and dashboards. We build fast, secure and accessible web solutions using modern frameworks.
        </p>
        <h3 className="font-semibold mb-2">What we offer</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Responsive websites</li>
          <li>Headless eCommerce</li>
          <li>Web portals & admin dashboards</li>
          <li>SEO & performance optimisation</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
