import { Metadata } from "next";

import ContactsView from "@/views/ContactsView";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a download page",
};

const Home = () => {
  return <ContactsView />;
};

export default Home;
