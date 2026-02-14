import Link from "next/link";
import {
  Music,
  Guitar,
  Headphones,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

const instruments = [
  { name: "Guitar", icon: Guitar },
  { name: "Piano", icon: Music },
  { name: "Violin", icon: Music },
  { name: "Drums", icon: Headphones },
  { name: "Dulcimer", icon: Music },
  { name: "Flute", icon: Music },
];

const features = [
  {
    title: "Private Lessons",
    description:
      "One-on-one sessions with expert instructors tailored to your pace and goals.",
    icon: Users,
  },
  {
    title: "Group Classes",
    description:
      "Learn together with fellow musicians in engaging group sessions.",
    icon: Users,
  },
  {
    title: "Expert Teachers",
    description:
      "Our instructors are professional musicians with years of teaching experience.",
    icon: Star,
  },
  {
    title: "Flexible Schedule",
    description:
      "Book lessons at times that work for you, from anywhere in the world.",
    icon: Headphones,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark to-dark-light py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Learn Music <span className="text-primary">Online</span>
            <br />
            With Expert Teachers
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of students learning their favorite instruments
            through personalized online and in-person lessons.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
              Instruments
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Choose Your Instrument
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {instruments.map((inst) => (
              <Link
                key={inst.name}
                href="/courses"
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                  <inst.icon
                    size={24}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <p className="font-medium text-dark text-sm">{inst.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
              Why Musiphone
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Everything You Need to Learn Music
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join Musiphone today and learn from the best instructors in the
            comfort of your home.
          </p>
          <Link
            href="/signup"
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Sign Up Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
