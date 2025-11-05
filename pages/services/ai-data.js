import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AiData() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">AI & Data Science</h1>
        <p className="text-gray-700 mb-6">
          Machine learning models, predictive analytics, data dashboards and AI chatbots that drive insight and automation.
        </p>
      </main>
      <Footer />
    </div>
  );
}
