import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import logoPinkWhite from "/public/images/logo-pink-white.png";
import logoPink from "/public/images/logo-pink.png";
import logoWhite from "/public/images/logo-white.png";

interface Props {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  headerCls?: string;
}

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  headerCls,
}: Props) {
  return (
    <>
      <header
        id="header"
        className={`tra-menu white-scroll ${headerCls ? headerCls : ""}`}
      >
        <div className="header-wrapper">
          {/* MOBILE HEADER */}
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <Image src={logoPink} alt="mobile-logo" />
            </span>
            <a
              id="wsnavtoggle"
              className="wsanimated-arrow"
              onClick={handleMobileMenu}
            >
              <span />
            </a>
          </div>
          {/* NAVIGATION MENU */}
          <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
            <div className="wsmainwp clearfix">
              {/* HEADER BLACK LOGO */}
              <div className="desktoplogo">
                <Link href="/" className="logo-black">
                  <Image
                    className="light-theme-img"
                    src={logoPink}
                    alt="logo"
                  />
                  <Image
                    className="dark-theme-img"
                    src={logoPinkWhite}
                    alt="logo"
                  />
                </Link>
              </div>
              {/* HEADER WHITE LOGO */}
              <div className="desktoplogo">
                <Link href="#hero-1" className="logo-white">
                  <Image src={logoWhite} alt="logo" />
                </Link>
              </div>
              {/* MAIN MENU */}
              <nav
                className="wsmenu clearfix"
                style={{ height: `${isMobileMenu ? "100vh" : ""}` }}
              >
                {isMobileMenu ? <MobileMenu /> : <Menu />}
              </nav>{" "}
              {/* END MAIN MENU */}
            </div>
          </div>{" "}
          {/* END NAVIGATION MENU */}
        </div>{" "}
        {/* End header-wrapper */}
      </header>
    </>
  );
}
