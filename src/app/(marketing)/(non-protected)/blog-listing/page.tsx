import { Metadata } from "next";

import BlogsView from "@/views/BlogsView";

export const metadata: Metadata = {
  title: "blogs",
  description: "Stay up to date with our news, ideas and updates",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "blogs",
    description: "Stay up to date with our news, ideas and updates",
    url: "https://contentql.com/blog-listing",
    images: "/images/blog/post-2-img.jpg",
  },
};

const Home = () => {
  return <BlogsView />;
};

export default Home;
