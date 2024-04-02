import { Metadata } from "next";

import ThemesView from "@/views/ThemesView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a themes page",
};

const Home = () => {
  return <ThemesView />;
};

export default Home;
