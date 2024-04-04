import { Metadata } from "next";

import DownloadView from "@/views/DownloadView";

export const metadata: Metadata = {
  title: "download",
  description: "Download Latest Version",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "download",
    description: "Download Latest Version",
    url: "https://contentql.com/download",
    images: "/images/favicon.png",
  },
};

const Home = () => {
  return <DownloadView />;
};

export default Home;
