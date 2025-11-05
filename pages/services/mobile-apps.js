import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobileApps() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Mobile App Development</h1>
        <p className="text-gray-700 mb-6">
          Android & iOS development, cross-platform apps and app modernization services to bring your mobile idea to life.
        </p>
      </main>
      <Footer />
    </div>
  );
}
