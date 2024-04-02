import { Metadata } from "next";

import SignUpView1 from "@/views/SignUpView1";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a SignUp-1 page",
};

const Home = () => {
  return <SignUpView1 />;
};

export default Home;
