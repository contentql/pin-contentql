import { Metadata } from "next";

import TermsView from "@/views/TermsView";

export const metadata: Metadata = {
  title: "terms",
  description: "Terms of Service",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "terms",
    description: "Terms of Service",
    url: "https://contentql.com/terms",
    images: "/images/favicon.png",
  },
};

const Home = () => {
  return <TermsView />;
};

export default Home;
