import { Users, ThumbsUp, TrendingUp, Headphones } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Clients" },
  { icon: ThumbsUp, value: "100+", label: "Satisfaction" },
  { icon: TrendingUp, value: "99K+", label: "Sales" },
  { icon: Headphones, value: "24H", label: "Support" },
];

const processes = [
  {
    step: "01",
    title: "Choose Your Instrument",
    description:
      "Browse through our wide selection of instruments and find the one that speaks to your soul.",
  },
  {
    step: "02",
    title: "Find Your Teacher",
    description:
      "Explore profiles of expert instructors, view their portfolios and available time slots.",
  },
  {
    step: "03",
    title: "Book a Session",
    description:
      "Select a convenient time from your teacher's schedule and reserve your spot.",
  },
  {
    step: "04",
    title: "Start Learning",
    description:
      "Join your online class and begin your musical journey with personalized guidance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            About Us
          </h1>
          <p className="text-gray-medium max-w-2xl mx-auto">
            We are passionate about making music education accessible to
            everyone. Our platform connects talented instructors with eager
            students worldwide.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon size={28} className="text-white/80" />
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-white/80 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process) => (
              <div
                key={process.step}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <span className="text-primary font-bold group-hover:text-white transition-colors">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Every big idea starts with a small step forward
              </h2>
              <p className="text-gray-400 mb-6">
                Start your musical journey today. Whether you&apos;re a beginner
                picking up your first instrument or an experienced musician
                looking to refine your skills, we have the right teacher for
                you.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                Get Started
              </button>
            </div>
            <div className="w-full md:w-80 h-64 bg-dark-light rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Headphones size={36} className="text-primary" />
                </div>
                <p className="text-gray-400 text-sm">Start Learning Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
