import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { id: "web-development", title: "Web Development & Design", desc: "Corporate websites, eCommerce, portals, dashboards and UI/UX design." },
  { id: "mobile-apps", title: "Mobile App Development", desc: "Android & iOS apps, cross-platform solutions and app modernization." },
  { id: "ui-ux", title: "UI / UX Design", desc: "User-focused interfaces and interactive prototypes." },
  { id: "ai-data", title: "AI & Data Science", desc: "Machine learning models, predictive analytics and chatbots." },
  { id: "software", title: "Software Development", desc: "Custom software, ERP/CRM and workflow automation." },
  { id: "cloud-devops", title: "Cloud & DevOps", desc: "Cloud architecture, CI/CD and scalable deployments." },
  { id: "digital-marketing", title: "Digital Marketing", desc: "SEO, SMM and lead generation strategies." },
  { id: "support", title: "Support & Maintenance", desc: "Long-term support and continuous improvement." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-sky-600 mb-8">Our Services</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.id} href={`/services/${s.id}`} className="block">
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
                <div className="mt-4 text-sm text-sky-600">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
