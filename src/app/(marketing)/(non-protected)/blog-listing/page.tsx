import { Metadata } from "next";

import BlogsView from "@/views/BlogsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a blog page",
};

const Home = () => {
  return <BlogsView />;
};

export default Home;
