import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <main className="relative flex items-center justify-center text-center min-h-screen pt-16 overflow-hidden bg-gradient-to-tr from-sky-500 to-cyan-400 text-white">
        {/* subtle overlay shapes (optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Innovative Digital Solutions
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/90">
            At <span className="font-semibold">WaveMind Solutions</span>, we combine technology, design and AI to build products that transform businesses.
          </p>
        </div>
      </main>

      {/* Tagline */}
      <section className="py-12 bg-white text-center text-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-sky-600">WaveMind Solutions</h2>
          <p className="mt-3 text-lg">Innovate · Elevate · Navigate</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-sky-600 mb-4">About Us</h3>
            <p className="text-lg leading-relaxed mb-4">
              At <strong>WaveMind Solutions</strong>, we believe technology should not just solve problems — it should create possibilities.
              We offer cutting-edge web, mobile, software, and AI/ML solutions tailored to modern business needs.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to innovate continuously, deliver excellence, and help businesses harness technology to transform ideas into impactful digital realities.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-white rounded-2xl shadow-inner flex items-center justify-center">
              <span className="text-gray-400">[Team / Illustration]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-sky-600 mb-8">Our Mission, Vision & Core Values</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Mission</h4>
              <p className="text-gray-600">To deliver smart, scalable and result-oriented technology solutions that empower businesses to innovate and grow.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Vision</h4>
              <p className="text-gray-600">To be a trusted global technology partner recognized for transforming businesses through smart, scalable digital solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Core Values</h4>
              <ul className="text-gray-600 space-y-1">
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Collaboration</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-sky-600 mb-8">Why Choose Us</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Tailor-Made Solutions</h4>
              <p className="text-gray-600 mt-2">Built specifically for your goals.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Expert Team</h4>
              <p className="text-gray-600 mt-2">Skilled professionals with real-world experience.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">End-to-End Services</h4>
              <p className="text-gray-600 mt-2">From concept to launch and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-sky-600 mb-6">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["IT & Software","eCommerce","Education","Healthcare","Finance","Travel","Real Estate","Small Business"].map((t) => (
              <span key={t} className="px-4 py-2 bg-gray-100 rounded-full text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-sky-600 mb-6">Get in Touch</h3>
          <p className="text-gray-700 mb-6">Have a project in mind or want to collaborate? Let’s build something great together.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-1">Email</h4>
              <p><a href="mailto:wavemindsolutions@gmail.com" className="text-sky-600">wavemindsolutions@gmail.com</a></p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-1">Phone (PINAK MAJUMDER)</h4>
              <p className="text-gray-600">Sales — +91 8282843434</p>
              <h4 className="font-semibold mb-1 mt-3">Phone (ABHISHEK DUTTA ROY)</h4>
              <p className="text-gray-600">Support — +91 8282812121</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-1">Office</h4>
              <p>
                <a
                  href="https://www.google.com/maps/search/13+Kalupara+Lane+Dhakuria+Kolkata+700031"
                  target="_blank" rel="noreferrer"
                  className="text-sky-600"
                >
                  13, Kalupara Lane, Dhakuria, Kolkata - 700031
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
