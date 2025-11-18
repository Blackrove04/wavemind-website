import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Software() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
<main className="max-w-4xl mx-auto px-6 py-20">
  <h1 className="text-3xl font-bold text-sky-600 mb-4">Software Development</h1>

  <p className="text-gray-700 mb-6">
    We create powerful, high-performance software solutions built to solve real business challenges. 
    At WaveMind Solutions, our software development approach focuses on innovation, scalability, 
    automation, and long-term sustainability. Whether you’re a startup or an enterprise, we build 
    systems that streamline your operations, reduce manual work, and elevate your business efficiency 
    to the next level.
  </p>

  <h3 className="font-semibold mb-4 text-xl text-gray-800">What We Offer</h3>

  <ul className="list-disc list-inside text-gray-700 space-y-6">

    {/* 1. Custom Software Solutions */}
    <li>
      <strong className="text-gray-900 text-lg">Custom Software Solutions</strong> – 
      Tailored applications designed to meet your unique business requirements and workflows.

      <p className="mt-2">
        Transform your ideas into intelligent, tailor-made applications designed specifically for your 
        business processes.
      </p>

      <p className="font-semibold mt-2">Why it’s special:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Built from the ground up to meet your unique business needs.</li>
        <li>Flexible architecture that adapts as your business grows.</li>
        <li>User-friendly, secure, and performance-optimized.</li>
        <li>Integrates easily with your existing tools and infrastructure.</li>
      </ul>

      <p className="font-semibold mt-2">Examples of custom software we build:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Business management systems</li>
        <li>Customer-facing portals</li>
        <li>Inventory & billing software</li>
        <li>HR & attendance systems</li>
        <li>Retail and POS applications</li>
        <li>Industry-specific tools (real estate, healthcare, eCommerce, finance, education, etc.)</li>
      </ul>

      <p className="mt-2">This ensures your business moves faster, smarter, and more efficiently than ever.</p>
    </li>

    {/* 2. ERP & CRM Systems */}
    <li>
      <strong className="text-gray-900 text-lg">ERP & CRM Systems</strong> – 
      Automate processes like inventory, sales, HR, and customer management.

      <p className="mt-2">
        We develop end-to-end ERP and CRM platforms that centralize your operations and enhance 
        customer management.
      </p>

      <p className="font-semibold mt-2">What you get:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Automated tracking of inventory, sales, HR, payroll, finance, and more.</li>
        <li>A 360° view of customers with actionable insights.</li>
        <li>Better coordination between teams with shared dashboards.</li>
        <li>Custom modules built for your business workflow.</li>
      </ul>

      <p className="mt-2">
        These systems boost productivity and help you make data-backed decisions instantly.
      </p>
    </li>

    {/* 3. Workflow Automation */}
    <li>
      <strong className="text-gray-900 text-lg">Workflow Automation Tools</strong> – 
      Reduce manual work and increase efficiency with smart automation.

      <p className="mt-2">Say goodbye to repetitive, time-consuming tasks.</p>

      <p className="font-semibold mt-2">Our automation tools help you:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Reduce manual errors</li>
        <li>Speed up daily operations</li>
        <li>Automate reminders, approvals, communication, and data entry</li>
        <li>Standardize workflows for consistency</li>
        <li>Improve team productivity by 30–50%</li>
      </ul>

      <p className="mt-2">
        From small tasks to complex processes — we help you automate everything.
      </p>
    </li>

    {/* 4. API Integration */}
    <li>
      <strong className="text-gray-900 text-lg">API Integration Services</strong> – 
      Connect different systems for smoother operations and data flow.

      <p className="font-semibold mt-2">What we integrate:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Payment gateways</li>
        <li>CRMs & ERPs</li>
        <li>Accounting tools</li>
        <li>Third-party apps</li>
        <li>Custom internal systems</li>
      </ul>

      <p className="font-semibold mt-2">Benefits:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Centralized data</li>
        <li>Faster processes</li>
        <li>Reduced workload</li>
        <li>Better accuracy</li>
      </ul>

      <p className="mt-2">
        Your entire tech ecosystem works together — efficiently and effortlessly.
      </p>
    </li>

    {/* 5. Cloud Solutions */}
    <li>
      <strong className="text-gray-900 text-lg">Cloud-Based Solutions</strong> – 
      Highly scalable software accessible anytime, anywhere.

      <p className="mt-2">Build once. Scale infinitely.</p>

      <p className="font-semibold mt-2">Features:</p>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li>Accessible anytime, anywhere</li>
        <li>Secure data storage</li>
        <li>Automatic updates</li>
        <li>Highly scalable architecture</li>
        <li>Multi-user access with role-based permissions</li>
      </ul>

      <p className="mt-2">
        Cloud software ensures uninterrupted performance and is perfect for growing businesses.
      </p>
    </li>

  </ul>
</main>
      <Footer />
    </div>
  );
}
