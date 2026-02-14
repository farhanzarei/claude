import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

const blogData = {
  title: "Everything about world music",
  date: "28 May 2022",
  readTime: "12 Min",
  author: {
    name: "Loies Copas",
    role: "Writer",
  },
  content: `
    Music is a universal language that transcends borders, cultures, and time. World music encompasses the diverse musical traditions from every corner of the globe, each carrying its own unique story, instruments, and rhythms.

    From the intricate ragas of Indian classical music to the rhythmic complexity of West African drumming, from the haunting melodies of Celtic folk to the passionate flamenco of Spain, world music offers an endless journey of discovery.

    The beauty of world music lies in its ability to connect us with cultures we may never physically visit. Through melody and rhythm, we can experience the joy of Brazilian samba, the spiritual depth of Sufi music, the storytelling tradition of the griots, and the meditative qualities of Japanese shakuhachi flute.

    In recent decades, world music has become increasingly accessible through digital platforms and global collaborations. Artists like Yo-Yo Ma with his Silk Road Ensemble, and Anoushka Shankar blending Indian classical with electronic music, have brought world music to mainstream audiences.

    Understanding world music also means understanding the cultural contexts from which it emerges. Music is deeply intertwined with ritual, celebration, mourning, and daily life in cultures around the world. By studying these musical traditions, we gain insight into the values, beliefs, and histories of diverse communities.

    Whether you are a musician looking to expand your repertoire, a curious listener wanting to explore new sounds, or a student of culture seeking deeper understanding, world music offers something for everyone. The key is to approach each tradition with respect, curiosity, and an open ear.
  `,
};

const similarBlogs = [
  {
    slug: "mastering-guitar-basics",
    title: "Mastering guitar basics for beginners",
    description: "A comprehensive guide to getting started with guitar.",
    date: "15 Jun 2022",
    readTime: "8 Min",
  },
  {
    slug: "history-of-classical-piano",
    title: "The history of classical piano",
    description: "Journey through centuries of piano music.",
    date: "02 Jul 2022",
    readTime: "15 Min",
  },
  {
    slug: "music-theory-fundamentals",
    title: "Music theory fundamentals",
    description: "Understanding scales, chords, and progressions.",
    date: "15 Oct 2022",
    readTime: "13 Min",
  },
];

export default function BlogDetailPage() {
  const paragraphs = blogData.content
    .trim()
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Detail Blogs
          </h1>
          <p className="text-gray-medium">
            Read in-depth articles about music and instruments
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-medium hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to blogs
          </Link>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-4xl">&#9835;</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs text-gray-600">
              <Clock size={12} />
              {blogData.readTime}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
            {blogData.title}
          </h2>

          {/* Content */}
          <div className="prose max-w-none">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-gray-600 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mt-10 pt-8 border-t">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">
                {blogData.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-dark">{blogData.author.name}</p>
              <p className="text-sm text-gray-medium">{blogData.author.role}</p>
            </div>
            <span className="ml-auto text-sm text-gray-medium">
              {blogData.date}
            </span>
          </div>
        </div>
      </section>

      {/* Similar Blogs */}
      <section className="bg-gray-light py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-8">
            Similar Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xl">&#9835;</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-medium text-sm mb-3">
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
        </div>
      </section>
    </>
  );
}
