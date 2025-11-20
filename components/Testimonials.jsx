import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";



const testimonials = [
  {
    name: 'Karan Sachdev',
    role: 'CEO, TechStart Inc.',
    content: 'WaveMind Solutions transformed our digital presence completely. Their expertise and dedication to our project exceeded all expectations. The team was professional, responsive, and delivered exceptional results.',
    rating: 5,
    initials: 'SJ',
    color: 'bg-blue-500'
  },
  {
    name: 'Manan Kaur',
    role: 'CTO, DataFlow Systems',
    content: 'Working with WaveMind was a game-changer for our company. They delivered a robust, scalable solution that has significantly improved our operational efficiency. Highly recommended!',
    rating: 5,
    initials: 'MC',
    color: 'bg-purple-500'
  },
  {
    name: 'Kiran Mallik',
    role: 'Founder, CreativeHub',
    content: 'The level of innovation and attention to detail that WaveMind brings to every project is remarkable. They truly understand what it takes to build world-class digital products.',
    rating: 5,
    initials: 'ER',
    color: 'bg-pink-500'
  },
  {
    name: 'Shivani Thakur',
    role: 'VP of Operations, RetailPro',
    content: 'From concept to deployment, WaveMind Solutions was with us every step of the way. Their strategic approach and technical expertise made our digital transformation seamless.',
    rating: 5,
    initials: 'DT',
    color: 'bg-green-500'
  },
  {
    name: 'Manish Aggarwal',
    role: 'Marketing Director, BrandBoost',
    content: 'An outstanding partner! WaveMind not only delivered on time but also provided valuable insights that helped shape our digital strategy. Truly a team that cares about results.',
    rating: 5,
    initials: 'LW',
    color: 'bg-orange-500'
  },
  {
    name: 'Jyoti Reddy',
    role: 'COO, FinanceFirst',
    content: 'Security and reliability were our top priorities, and WaveMind delivered beyond our expectations. Their commitment to excellence is evident in every aspect of their work.',
    rating: 5,
    initials: 'JA',
    color: 'bg-indigo-500'
  }
];

export function Testimonials() {
  const testimonials = [
    {
      name: "Karan Sachdev",
      role: "CEO, TechStart Inc.",
      content:
        "WaveMind Solutions transformed our digital presence completely.",
      rating: 5,
      initials: "SJ",
      color: "bg-blue-500",
    },
    {
    name: "Manan Kaur",
    role: "CTO, DataFlow Systems",
    content: "Working with WaveMind was a game-changer for our company.",
    rating: 5,
    initials: "MC",
    color: "bg-purple-500"
  },
  {
    name: "Kiran Mallik",
    role: "Founder, CreativeHub",
    content: "The level of innovation and attention to detail that WaveMind brings to every project is remarkable. They truly understand what it takes to build world-class digital products.",
    rating: 5,
    initials: "ER",
    color: "bg-pink-500"
  },
  {
    name: "Shivani Thakur",
    role: "VP of Operations, RetailPro",
    content: "From concept to deployment, WaveMind Solutions was with us every step of the way. Their strategic approach and technical expertise made our digital transformation seamless.",
    rating: 5,
    initials: 'DT',
    color: "bg-green-500"
  },
  {
    name: "Manish Aggarwal",
    role: "Marketing Director, BrandBoost",
    content: "An outstanding partner! WaveMind not only delivered on time but also provided valuable insights that helped shape our digital strategy. Truly a team that cares about results.",
    rating: 5,
    initials: 'LW',
    color: "bg-orange-500"
  },
  {
    name: "Jyoti Reddy",
    role: "COO, FinanceFirst",
    content: "Security and reliability were our top priorities, and WaveMind delivered beyond our expectations.",
    rating: 5,
    initials: "JA",
    color: "bg-indigo-500"
  }
    
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4">
            <span className="text-purple-600">Testimonials</span>
          </div>
          <h2 className="text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-gray-200"
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6">"{t.content}"</p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className={`${t.color} text-white`}>
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{t.name}</div>
                    <div className="text-gray-600">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
