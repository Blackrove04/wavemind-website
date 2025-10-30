import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (gradient, centered) */}
      <main id="home" className="flex flex-col items-center justify-center text-center min-h-screen bg-linear-to-r from-indigo-600 via-indigo-500 to-blue-500 text-white px-4 pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Innovative Digital Solutions
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          At <span className="font-semibold">WaveMind Solutions</span>, we combine technology, design, and AI to build products that transform businesses.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#services" className="px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">Our Services</a>
          <a href="#contact" className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white/10 transition">Contact Us</a>
        </div>
      </main>

      {/* Tagline / Short intro */}
      <section className="flex flex-col items-center justify-center py-12 bg-gray-50 text-center text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">WaveMind Solutions</h2>
        <p className="mt-4 text-lg">Innovate. Elevate. Navigate.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h2>
            <p className="text-lg leading-relaxed mb-6">
              At <span className="font-semibold">WaveMind Solutions</span>, we believe technology should not just solve problems — it should create possibilities.
              We are a dynamic technology company offering cutting-edge web, mobile, software, and AI/ML solutions tailored to modern business needs.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to innovate continuously, deliver excellence, and help businesses harness the power of technology to transform ideas into impactful digital realities.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center">
              <span className="text-gray-500">[Image / Team Photo]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600 mb-12">Our Services</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold mb-3">Web Development & Design</h3>
              <p className="text-gray-600">
                Corporate websites, eCommerce, portals, dashboards and UI/UX design.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold mb-3">Mobile App Development</h3>
              <p className="text-gray-600">
                Android & iOS apps, cross-platform solutions and app modernization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-3">AI & Data Science</h3>
              <p className="text-gray-600">
                Machine learning models, predictive analytics, chatbots and data dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-indigo-600 mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-100 rounded-full">IT & Software</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">eCommerce</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Education</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Healthcare</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Finance</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Real Estate</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Travel</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Small Business</span>
          </div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <section id="contact" className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600 mb-8">Get in Touch</h2>
          <p className="text-lg mb-6 text-gray-700">
            Have a project in mind or want to collaborate? Let’s build something great together.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-1">📧 Email</h3>
              <p className="text-gray-600">wavemindsolutions@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">📞 Phone</h3>
              <p className="text-gray-600">7063313461 / 9872242151</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">📍 Office</h3>
              <p className="text-gray-600">13, Kalupara Lane, Dhakuria, Kolkata - 700031</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 text-2xl mb-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">🌐</a>
            <a href="https://www.linkedin.com/company/webmind-solutions/about/" className="hover:text-indigo-600 transition-colors">💼</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-center py-4 text-gray-600 border-t">
        © {new Date().getFullYear()} WaveMind Solutions — All Rights Reserved.
      </footer>
    </div>
  );
}
