import { Metadata } from "next";

import DownloadView from "@/views/DownloadView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a download page",
};

const Home = () => {
  return <DownloadView />;
};

export default Home;
