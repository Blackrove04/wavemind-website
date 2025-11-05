import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Support & Maintenance</h1>
        <p className="text-gray-700 mb-6">
          Long-term maintenance, monitoring, and incremental improvements to keep your product healthy and growing.
        </p>
      </main>
      <Footer />
    </div>
  );
}
