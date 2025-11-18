import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobileApps() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Mobile App Development</h1>
        <p className="text-gray-700 mb-6">
         We create powerful, intuitive mobile apps tailored to your business needs. From concept to deployment, we ensure seamless performance, modern interfaces, and smooth user experiences on every device.
        </p>
        <h3 className="font-semibold mb-2">What we offer</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Android & iOS App Development</strong> - Native apps with strong performance and reliability.</li>
          <li><strong>Cross-Platform Apps</strong> - Build once, run everywhere with Flutter, React Native, or other modern frameworks.</li>
          <li><strong>App Modernization</strong> - Revamp old apps with new features, improved performance, and updated UI.</li>
          <li><strong>UI/UX for Mobile</strong> - Beautiful layouts and seamless navigation designed for user satisfaction.</li>
          <li><strong>App Store Optimization (ASO)</strong> - Improve app visibility and downloads on Play Store and App Store.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
