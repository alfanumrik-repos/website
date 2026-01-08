import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { BookOpen, Calendar, Tag, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Insights | Alfanumrik",
  description:
    "Thought leadership on school systems, learning design, and educational futures. No marketing fluff.",
};

const categories = [
  { name: "All", slug: "all" },
  { name: "School Systems", slug: "school-systems" },
  { name: "Learning Design", slug: "learning-design" },
  { name: "Assessment", slug: "assessment" },
  { name: "India Insights", slug: "india-insights" },
];

const articles = [
  {
    title: "Why Schools Need Systems Thinking, Not More Software",
    excerpt:
      "The problem isn't lack of tools. It's lack of integration. Here's how systems thinking changes the approach to school technology.",
    category: "School Systems",
    date: "December 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "The Case for Continuous Assessment Over Terminal Exams",
    excerpt:
      "High-stakes annual exams measure memory, not mastery. Research shows continuous assessment leads to deeper learning. Here's the evidence.",
    category: "Assessment",
    date: "November 2025",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "Cognitive Load in Digital Learning: What Schools Get Wrong",
    excerpt:
      "More content isn't better learning. Understanding cognitive load helps design experiences that actually teach.",
    category: "Learning Design",
    date: "October 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "India's School Compliance Landscape: A Practical Guide",
    excerpt:
      "RTE Act, board requirements, GST implications. Navigating the regulatory maze that Indian schools face daily.",
    category: "India Insights",
    date: "September 2025",
    readTime: "15 min read",
    featured: false,
  },
  {
    title: "The Teacher Burnout Crisis: Data, Causes, and Solutions",
    excerpt:
      "Teachers are leaving the profession at alarming rates. Administrative burden is a key factor. Here's what the research shows.",
    category: "School Systems",
    date: "August 2025",
    readTime: "11 min read",
    featured: false,
  },
  {
    title: "Personalization That Works: Beyond the AI Hype",
    excerpt:
      "Adaptive learning promises are often overblown. Here's what actually works, grounded in learning science.",
    category: "Learning Design",
    date: "July 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    title: "Parent Communication: From Data Dumps to Meaningful Dialogue",
    excerpt:
      "Schools share information but fail to communicate. The shift from reporting to relationship changes everything.",
    category: "School Systems",
    date: "June 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "The Future of School Assessment in India",
    excerpt:
      "NEP 2020 envisions competency-based assessment. What does implementation actually look like?",
    category: "India Insights",
    date: "May 2025",
    readTime: "14 min read",
    featured: false,
  },
];

const featuredArticles = articles.filter((a) => a.featured);
const regularArticles = articles.filter((a) => !a.featured);

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="cream" className="pt-20 lg:pt-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-maize rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-charcoal" />
              </div>
              <span className="text-sm font-medium text-charcoal/60">
                Research & Insights
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              A Thinking Company
            </h1>

            <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
              Articles on school systems, learning design, assessment futures,
              and India-specific operational insights. No marketing fluff—just
              substance.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              We believe that sharing knowledge builds trust. These insights
              represent our thinking, research, and perspective on
              education&apos;s future.
            </p>
          </div>
        </Section>

        {/* Categories */}
        <Section variant="white" className="py-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat.slug === "all"
                    ? "bg-charcoal text-white"
                    : "bg-charcoal/5 text-charcoal hover:bg-charcoal/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Section>

        {/* Featured Articles */}
        <Section variant="white" className="pt-0">
          <h2 className="text-2xl font-semibold text-charcoal mb-8">
            Featured
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="group bg-cream rounded-3xl p-8 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-maize/30 rounded-full text-sm font-medium text-charcoal">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-charcoal mb-4 group-hover:text-charcoal/80 transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-maize transition-colors">
                    Read article
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* All Articles */}
        <Section variant="cream">
          <h2 className="text-2xl font-semibold text-charcoal mb-8">
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article
                key={article.title}
                className="group bg-white rounded-2xl p-6 border border-border/50 hover:border-maize/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-charcoal/80 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <span className="text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Subscribe */}
        <Section variant="charcoal">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-white/70 mb-8">
              New insights on school systems, learning design, and educational
              futures. No spam, just substance.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-maize transition-colors"
              />
              <button
                type="submit"
                className="btn-pill bg-maize text-charcoal px-8"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-sm text-white/40">
              Monthly digest. Unsubscribe anytime.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
