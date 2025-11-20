import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="font-sans bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#0A1A3A] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transforming Ideas into{" "}
              <span className="text-[#00C4FF]">Intelligent Digital</span> Solutions
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              We help startups and SMBs innovate with AI, web, and automation.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:wavemindsolutions@gmail.com"
                className="bg-linear-to-r from-[#00C4FF] to-[#0078FF] text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Get a Free Consultation
              </a>
              <a
                href="services"
                className="bg-white text-[#0A1A3A] font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Illustration / Logo area */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/logo.png"
              alt="WaveMind Brain Illustration"
              className="w-80 md:w-96 drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#0A1A3A]">About Us</h2>
            <p className="text-lg mb-4">
              At <strong>WaveMind Solutions</strong>, At WaveMind Solutions, we believe technology is more than just a tool—it is the driving force behind innovation, growth, and sustainable business transformation. We are a forward-thinking technology company specializing in Web Development, Mobile Applications, AI & Data Science, Software Development, Cloud & DevOps, Digital Transformation, Digital Marketing, and Graphic Design.

Our mission is to empower startups, brands, and enterprises with smart, scalable, and high-impact digital solutions that help them innovate, elevate, and navigate the digital future with confidence. With a blend of creativity, technical expertise, and strategic insight, we deliver solutions that solve real business challenges while unlocking new opportunities.

We are committed to building long-term partnerships by ensuring transparency, quality, and excellence in everything we do. Whether you are a growing business or an established enterprise, WaveMind Solutions is your trusted technology partner dedicated to turning ideas into powerful digital realities.
            </p>
            <p className="text-lg text-gray-600">
              50+ projects delivered — trusted by startups across India.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img
              src="/signature.JPG"
              alt="About Illustration"
              className="w-72 md:w-80 opacity-80"
            />
          </div>
        </div>
      </section>

     {/* MISSION / VISION / CORE VALUES */}
<section id="mission" className="py-20 bg-[#F8FAFC] text-gray-800">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10 text-[#0A1A3A]">
      Our Mission, Vision & Core Values
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Mission */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/mission.png"
            alt="Mission Icon"
            className="h-16 w-16 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0A1A3A]">
          Mission
        </h3>
        <p className="text-gray-600">
          To empower businesses with intelligent digital solutions that
          accelerate growth and transformation.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/vision.png"
            alt="Vision Icon"
            className="h-16 w-16 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0A1A3A]">
          Vision
        </h3>
        <p className="text-gray-600">
          To be a leading provider of innovative tech solutions that shape
          the future of digital businesses.
        </p>
      </div>

      {/* Core Values */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <img
            src="/core-values.png"
            alt="Core Values Icon"
            className="h-16 w-16 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0A1A3A]">
          Core Values
        </h3>
        <p className="text-gray-600">
          Integrity. Innovation. Excellence. Collaboration.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* INDUSTRIES WE SERVE */}
      <section
        id="industries"
        className="py-20 bg-[#F8FAFC] text-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#0A1A3A]">
            Industries We Serve
          </h2>
          <p className="text-gray-600 mb-12">
            Our experience spans across diverse domains — helping businesses of all sizes transform through technology.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "IT & Software", img: "/industries/it-software.jpg" },
              { name: "eCommerce", img: "/industries/ecommerce.webp" },
              { name: "Education", img: "/industries/education.jpeg" },
              { name: "Healthcare", img: "/industries/healthcare.webp" },
              { name: "Finance", img: "/industries/finance.jpeg" },
              { name: "Travel", img: "/industries/travel.jpg" },
              { name: "Real Estate", img: "/industries/real-estate.jpg" },
              { name: "Small Business", img: "/industries/small-business.jpg" },
            ].map((item) => (
              <div
                key={item.name}
                className="relative group h-60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* TESTIMONIALS SECTION */}
      <Testimonials />

      <Footer />
    </div>
  );
}
