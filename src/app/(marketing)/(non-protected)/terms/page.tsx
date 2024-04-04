import { Metadata } from "next";

import TermsView from "@/views/TermsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a templates page",
};

const Home = () => {
  return <TermsView />;
};

export default Home;
