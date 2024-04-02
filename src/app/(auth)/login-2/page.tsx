import { Metadata } from "next";

import LoginView2 from "@/views/LoginView2";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a Login-2 page",
};

const Home = () => {
  return <LoginView2 />;
};

export default Home;
