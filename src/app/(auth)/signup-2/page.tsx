import { Metadata } from "next";

import SignUpView2 from "@/views/SignUpView2";

export const metadata: Metadata = {
  title: "contentQL",
  description: "This is a SignUp-2 page",
};

const Home = () => {
  return <SignUpView2 />;
};

export default Home;
