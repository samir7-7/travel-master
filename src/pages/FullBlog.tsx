import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils/createPageUrl";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Facebook,
  Twitter,
  Mail,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { format } from "date-fns";
import { blogPosts } from "@/data/blogData";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [suggestedBlogs, setSuggestedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = () => {
    const currentBlog = blogPosts.find((b) => b.slug === slug);

    if (currentBlog) {
      setBlog(currentBlog);

      const storedViews = JSON.parse(localStorage.getItem("blogViews") || "{}");
      const currentViews = storedViews[currentBlog.id] || 0;
      const newViews = currentViews + 1;
      storedViews[currentBlog.id] = newViews;
      localStorage.setItem("blogViews", JSON.stringify(storedViews));
      setViewCount(newViews);

      const suggested = blogPosts
        .filter(
          (b) => b.id !== currentBlog.id && b.category === currentBlog.category
        )
        .slice(0, 3);
      setSuggestedBlogs(suggested);
    }

    setLoading(false);
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog?.title}`,
      "_blank"
    );
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${blog?.title}&body=Check out this article: ${window.location.href}`;
  };

  const getSuggestedBlogViews = (blogId) => {
    const storedViews = JSON.parse(localStorage.getItem("blogViews") || "{}");
    return storedViews[blogId] || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Blog not found
          </h2>
          <Link
            to={createPageUrl("DestinationBlogs")}
            className="text-teal-600 hover:underline"
          >
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Image */}
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 md:px-8 pb-16">
              <Link
                to={createPageUrl("blog")}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blogs
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-[#308DDE] backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                    {blog.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {format(new Date(blog.date), "MMMM d, yyyy")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {blog.reading_time} min read
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {viewCount} views
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Social Share */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200"
            >
              <Share2 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">
                Share this article:
              </span>
              <div className="flex gap-3">
                <button
                  onClick={shareOnFacebook}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={shareViaEmail}
                  className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Blog Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Suggested Blogs */}
          {suggestedBlogs.length > 0 && (
            <div className="max-w-6xl mx-auto mt-20 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-0.5 w-12 bg-gradient-to-r from-teal-500 to-blue-500" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Related Stories
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {suggestedBlogs.map((suggestedBlog) => (
                  <Link
                    key={suggestedBlog.id}
                    to={createPageUrl(`BlogDetail?slug=${suggestedBlog.slug}`)}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={suggestedBlog.featured_image}
                          alt={suggestedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-sm">
                          <Eye className="w-4 h-4" />
                          {getSuggestedBlogViews(suggestedBlog.id)}
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                          {suggestedBlog.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {suggestedBlog.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {suggestedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
