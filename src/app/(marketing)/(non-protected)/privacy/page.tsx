import { Metadata } from "next";

import PrivacyView from "@/views/PrivacyView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a privacy page",
};

const Home = () => {
  return <PrivacyView />;
};

export default Home;
