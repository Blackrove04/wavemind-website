import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Software() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Software Development</h1>
        <p className="text-gray-700 mb-6">
          Custom software, ERP & CRM systems, workflow automation and API integrations tailored to your business.
        </p>
      </main>
      <Footer />
    </div>
  );
}
