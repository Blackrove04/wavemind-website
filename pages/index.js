import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar at top */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Empowering Digital Innovation
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          At <span className="font-semibold">WaveMind Solutions</span>, we craft intelligent systems and design
          experiences that transform businesses.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
      </main>

      {/* Tagline Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gray-50 text-center text-gray-800">
        <h2 className="text-4xl font-bold text-indigo-600">WaveMind Solutions</h2>
        <p className="mt-4 text-lg">Innovate. Elevate. Navigate.</p>
      </section>
      {/* About Section */}
<section className="py-20 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left side - text */}
    <div>
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">
        About Us
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        At <span className="font-semibold">WaveMind Solutions</span>, we believe in harnessing technology
        to empower businesses. From intelligent web platforms to data-driven
        automation, we help our clients innovate, adapt, and grow in the digital world.
      </p>
      <p className="text-lg leading-relaxed">
        Our mission is simple — to transform ideas into impactful digital
        solutions with creativity, precision, and passion.
      </p>
    </div>

    {/* Right side - image placeholder */}
    <div className="flex justify-center">
      <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center">
        <span className="text-gray-500">[Image Placeholder]</span>
      </div>
    </div>
  </div>
</section>
{/* Services Section */}
<section className="py-20 bg-gray-50 text-gray-800">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-indigo-600 mb-12">
      Our Services
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Service 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
        <div className="text-5xl mb-4">💻</div>
        <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
        <p className="text-gray-600">
          Custom websites and platforms built with modern frameworks to help
          your business stand out online.
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
        <div className="text-5xl mb-4">🤖</div>
        <h3 className="text-2xl font-semibold mb-3">AI Integration</h3>
        <p className="text-gray-600">
          Empower your products with smart automation, chatbots, and
          predictive AI solutions.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
        <div className="text-5xl mb-4">🎨</div>
        <h3 className="text-2xl font-semibold mb-3">UI / UX Design</h3>
        <p className="text-gray-600">
          Beautiful, user-focused interfaces that deliver a smooth and engaging
          digital experience.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Contact / Footer Section */}
<section className="py-20 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-indigo-600 mb-8">Get in Touch</h2>
    <p className="text-lg mb-6 text-gray-700">
      Have a project in mind or want to collaborate? Let’s build something great together.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
      <div>
        <h3 className="text-xl font-semibold mb-1">📧 Email</h3>
        <p className="text-gray-600">contact@wavemindsolutions.com</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">📞 Phone</h3>
        <p className="text-gray-600">+91 98765 43210</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">📍 Location</h3>
        <p className="text-gray-600">Bengaluru, India</p>
      </div>
    </div>

    {/* Social Links */}
    <div className="flex justify-center space-x-6 text-2xl">
      <a href="#" className="hover:text-indigo-600 transition-colors">🌐</a>
      <a href="#" className="hover:text-indigo-600 transition-colors">🐦</a>
      <a href="#" className="hover:text-indigo-600 transition-colors">💼</a>
    </div>
  </div>
</section>

{/* Footer Bar */}
<footer className="bg-gray-100 text-center py-4 text-gray-600 border-t">
  © {new Date().getFullYear()} WaveMind Solutions — All Rights Reserved.
</footer>

    </div>
  );
}
