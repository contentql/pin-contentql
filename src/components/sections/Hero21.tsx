import Link from "next/link";

import { Media } from "@/payload-types";
import Image from "next/image";
import VideoPopup from "../elements/VidepPopup";

export default function Hero21({
  title,
  button1_text,
  button2_text,
  sub_title1,
  sub_title2,
  background_image,
}: {
  title?: string;
  button1_text?: string;
  button2_text?: string;
  sub_title1?: string;
  sub_title2?: string;
  background_image?: Media;
}) {
  return (
    <>
      <section id="hero-21" className="hero-section">
        <div className="container text-center">
          {/* HERO TEXT */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="hero-21-txt wow fadeInUp">
                {/* Title */}
                <h2 className="s-56 w-700">{title}</h2>
                {/* Buttons */}
                <div className="btns-group">
                  <Link
                    href="#banner-13"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    {button1_text}
                  </Link>
                  <Link
                    href="#features-5"
                    className="btn r-04 btn--tra-black hover--theme"
                  >
                    {button2_text}
                  </Link>
                </div>
                {/* Advantages List */}
                <ul className="advantages ico-15 mt-15 clearfix">
                  <li>
                    <p className="p-sm">{sub_title1}</p>
                  </li>
                  <li className="advantages-links-divider">
                    <p>
                      <span className="flaticon-minus" />
                    </p>
                  </li>
                  <li>
                    <p className="p-sm">{sub_title2}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="hero-21-wrapper r-34">
            <div className="hero-overlay bg--fixed">
              <div className="row">
                <div className="col">
                  <div className="hero-21-img video-preview wow fadeInUp">
                    {/* Play Icon */}
                    <VideoPopup style={1} />
                    {/* Preview Image */}
                    <Image
                      className="img-fluid"
                      src={(background_image as Media)?.url || ""}
                      alt={(background_image as Media)?.alt || ""}
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* hero overlay */}
          </div>{" "}
          {/* End hero-21-wrapper */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
