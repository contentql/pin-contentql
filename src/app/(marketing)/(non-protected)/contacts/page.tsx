import { Metadata } from "next";

import ContactsView from "@/views/ContactsView";

export const metadata: Metadata = {
  title: "contacts",
  description: "Want to learn more about ContentQL",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "contacts",
    description: "Want to learn more about ContentQL",
    url: "https://contentql.com/contacts",
    images: "/images/help.png",
  },
};

const Home = () => {
  return <ContactsView />;
};

export default Home;
