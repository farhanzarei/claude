"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All music",
  "Guitar",
  "Drum regiment",
  "Dulcimer",
  "Violin",
  "Piano",
  "More",
];

const blogs = [
  {
    slug: "everything-about-world-music",
    title: "Everything about world music",
    description:
      "Explore the diverse and rich traditions of world music from different cultures and regions.",
    date: "28 May 2022",
    readTime: "12 Min",
    category: "All music",
  },
  {
    slug: "mastering-guitar-basics",
    title: "Mastering guitar basics for beginners",
    description:
      "A comprehensive guide to getting started with guitar, from chords to strumming patterns.",
    date: "15 Jun 2022",
    readTime: "8 Min",
    category: "Guitar",
  },
  {
    slug: "history-of-classical-piano",
    title: "The history of classical piano",
    description:
      "Journey through centuries of piano music, from Baroque to contemporary compositions.",
    date: "02 Jul 2022",
    readTime: "15 Min",
    category: "Piano",
  },
  {
    slug: "drum-patterns-for-rock",
    title: "Essential drum patterns for rock music",
    description:
      "Learn the most iconic drum beats that shaped rock and roll history.",
    date: "18 Jul 2022",
    readTime: "10 Min",
    category: "Drum regiment",
  },
  {
    slug: "violin-techniques",
    title: "Advanced violin techniques explained",
    description:
      "From vibrato to pizzicato, master the techniques that bring violin music to life.",
    date: "05 Aug 2022",
    readTime: "14 Min",
    category: "Violin",
  },
  {
    slug: "dulcimer-folk-traditions",
    title: "Dulcimer in folk music traditions",
    description:
      "Discover the beautiful sounds of dulcimer and its place in folk music around the world.",
    date: "22 Aug 2022",
    readTime: "9 Min",
    category: "Dulcimer",
  },
  {
    slug: "how-to-read-sheet-music",
    title: "How to read sheet music effectively",
    description:
      "A step-by-step guide to reading musical notation for any instrument.",
    date: "10 Sep 2022",
    readTime: "11 Min",
    category: "All music",
  },
  {
    slug: "guitar-fingerpicking",
    title: "Fingerpicking patterns for acoustic guitar",
    description:
      "Beautiful fingerpicking patterns that will elevate your acoustic guitar playing.",
    date: "28 Sep 2022",
    readTime: "7 Min",
    category: "Guitar",
  },
  {
    slug: "music-theory-fundamentals",
    title: "Music theory fundamentals everyone should know",
    description:
      "Understanding scales, chords, and progressions that form the foundation of all music.",
    date: "15 Oct 2022",
    readTime: "13 Min",
    category: "All music",
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All music");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const filteredBlogs =
    activeCategory === "All music"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Blogs
          </h1>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Explore our latest articles about music education, instruments, and
            musical culture from around the world.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group"
              >
                <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-2xl">&#9835;</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-medium text-sm leading-relaxed mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-medium">
                      <span>{blog.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-gray-600">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
