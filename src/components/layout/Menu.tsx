import { Header } from "@/payload-types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillEdit } from "react-icons/ai";
import { FaAffiliatetheme } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { IoIosCode } from "react-icons/io";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineIntegrationInstructions,
  MdOutlinePublish,
  MdOutlineSystemUpdateAlt,
} from "react-icons/md";
import { SiSpringCreators } from "react-icons/si";
import { TbHelpCircle } from "react-icons/tb";

interface Props {
  headerData?: Header;
}
export default function Menu({ headerData }: Props) {
  const router = useRouter();
  // const parser = new DOMParser();

  console.log("hedaerlinks", headerData?.resources1_links);

  const product = [
    <SiSpringCreators size={26} />,
    <MdOutlinePublish size={26} />,
    <MdOutlineIntegrationInstructions size={26} />,
    <IoIosCode size={26} />,
  ];

  const resources1 = [
    <MdOutlineFeaturedPlayList size={26} />,
    <FaAffiliatetheme size={26} />,
    <MdOutlineIntegrationInstructions size={26} />,
    <IoIosCode size={26} />,
  ];

  const resources2 = [
    {
      title: "Start here",
      description:
        "A huge library of guides, stories, interviews and tips for success",
      path: "/start-here",
      icon: <GoBook size={26} />,
    },
    {
      title: "Help center",
      description:
        "Get help from product features and answers to common questions",
      path: "/help-center",
      icon: <TbHelpCircle size={26} />,
    },
    {
      title: "Product updates",
      description: "all the latest changes and improvements to contentQL",
      path: "/product-updates",
      icon: <MdOutlineSystemUpdateAlt size={26} />,
    },
    {
      title: "About us",
      description:
        "Learn more about the people behind the platform (we're hiring)",
      path: "/about",
      icon: <AiFillEdit size={26} />,
    },
  ];

  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        <li>
          <Link href="#" className="h-link">
            Product <span className="wsarrow" />
          </Link>
          <ul className="sub-menu w-20">
            {headerData?.product_links?.map((product_link, index) => (
              <li key={product_link?.id} className="fst-li">
                <Link href={product_link?.path}>
                  <div className="navbar-icon">
                    <div className="icon">{product[index]}</div>
                    <div>
                      {" "}
                      <p className="navitem-title">{product_link?.title}</p>
                      <span className="navitem-description">
                        {product_link?.description}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple">
          <Link href={headerData?.explore_path || ""} className="h-link">
            Explore
          </Link>
        </li>
        {/* MEGAMENU */}
        <li className="mg_link">
          <Link href="#" className="h-link">
            Resources <span className="wsarrow" />
          </Link>
          <div className="wsmegamenu w-75 clearfix">
            <div className="container">
              <div className="row">
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-6 link-list">
                  {headerData?.resources1_links?.map(
                    (resources1_link, index) => (
                      <li key={resources1_link?.id} className="fst-li">
                        <Link href={resources1_link?.path}>
                          <div className="navbar-icon">
                            <div className="icon">{resources1[index]}</div>

                            <div>
                              {" "}
                              <p className="navitem-title">
                                {resources1_link?.title}
                              </p>
                              <span className="navitem-description">
                                {resources1_link?.description}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <ul className="col-md-12 col-lg-6 link-list">
                  {resources2.map((navitem) => (
                    <li key={navitem.title} className="fst-li">
                      <Link href={navitem.path}>
                        <div className="navbar-icon">
                          <div className="icon">{navitem.icon}</div>
                          <div>
                            {" "}
                            <p className="navitem-title">{navitem.title}</p>
                            <span className="navitem-description">
                              {navitem.description}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* MEGAMENU LINKS */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* End wsmegamenu */}
        </li>{" "}
        {/* END MEGAMENU */}
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple reg-fst-link mobile-last-link">
          <Link href={headerData?.templates_path || ""} className="h-link">
            Templates
          </Link>
        </li>
        <li className="nl-simple">
          <Link href={headerData?.pricing_path || ""} className="h-link">
            Pricing
          </Link>
        </li>
        {/* SIGN UP BUTTON */}
        <li className="nl-simple">
          <Link
            href="https://cloud.contentql.io/guest"
            className="btn r-04 btn--theme hover--tra-black last-link"
          >
            Sign in
          </Link>
        </li>
      </ul>
    </>
  );
}
