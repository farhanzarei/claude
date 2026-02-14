import Link from "next/link";
import { Youtube, Instagram, Twitter } from "lucide-react";

const services = [
  "Online Classes",
  "Private Lessons",
  "Group Courses",
  "In-Person Classes",
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">
                Musi<span className="text-primary">phone</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional online music education platform. Learn from expert
              instructors anytime, anywhere.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-dark-light rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-dark-light rounded-l-full text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary px-5 py-2 rounded-r-full text-sm font-medium hover:bg-primary-dark transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Musiphone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
