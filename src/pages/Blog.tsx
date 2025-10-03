import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils/createPageUrl";
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, ArrowRight, MapPin } from "lucide-react";
import { format } from "date-fns";
import { blogPosts, blogCategories } from "@/data/blogData";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function DestinationBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogViews, setBlogViews] = useState({});

  useEffect(() => {
    loadBlogs();
    loadViewCounts();
  }, []);

  const loadBlogs = () => {
    setBlogs(blogPosts);
    const featured = blogPosts.find((b) => b.is_featured) || blogPosts[0];
    setFeaturedBlog(featured);
    setLoading(false);
  };

  const loadViewCounts = () => {
    const storedViews = localStorage.getItem("blogViews");
    if (storedViews) {
      setBlogViews(JSON.parse(storedViews));
    }
  };

  const getViewCount = (blogId) => {
    return blogViews[blogId] || 0;
  };

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200"
            alt="Thailand"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Destination Blogs
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Discover the wonders of Thailand through our curated travel
                  stories and insider guides
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16">
          {/* Featured Blog */}
          {featuredBlog && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-12 bg-[#308DDE]" />
                <span className="text-sm font-semibold text-[#308DDE] tracking-wider uppercase">
                  Featured Story
                </span>
              </div>
              <Link to={createPageUrl("blog", { slug: featuredBlog.slug })}>
                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto overflow-hidden">
                      <img
                        src={featuredBlog.featured_image}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                          {featuredBlog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#308DDE] transition-colors">
                        {featuredBlog.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredBlog.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(featuredBlog.date), "MMM d, yyyy")}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredBlog.reading_time} min read
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {getViewCount(featuredBlog.id)} views
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#308DDE] font-semibold group-hover:gap-4 transition-all">
                        Read Full Story <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#308DDE] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-64 rounded-2xl mb-4" />
                      <div className="bg-gray-200 h-6 rounded mb-2" />
                      <div className="bg-gray-200 h-4 rounded" />
                    </div>
                  ))
              : filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={createPageUrl("blog", { slug: blog.slug })}>
                      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={blog.featured_image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                              {blog.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                            <Eye className="w-4 h-4" />
                            {getViewCount(blog.id)}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#308DDE] transition-colors line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {blog.reading_time} min
                            </div>
                            <div className="text-[#308DDE] font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                              Read More <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </div>

          {filteredBlogs.length === 0 && !loading && (
            <div className="text-center py-20">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">
                No blogs found in this category
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
