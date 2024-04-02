import { Metadata } from "next";

import LoginView1 from "@/views/LoginView1";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a login-1 page",
};

const Home = () => {
  return <LoginView1 />;
};

export default Home;
