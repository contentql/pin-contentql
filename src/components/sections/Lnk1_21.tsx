import { Media } from "@/payload-types";
import Image from "next/image";

export default function Lnk1_21({
  title,
  sub_title,
  heading1,
  paragraph1,
  heading2,
  paragraph2,
  points,
  background_image,
}: {
  title?: string;
  sub_title?: string;
  heading1?: string;
  paragraph1?: string;
  heading2?: string;
  paragraph2?: string;
  points?: {
    point?: string;
    id?: string | null;
  }[];
  background_image?: Media;
}) {
  return (
    <>
      <section id="lnk-1" className="pt-100 ct-01 content-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-80">
                {/* Title */}
                <h2 className="s-50 w-700">{title}</h2>
                {/* Text */}
                <p className="s-21 color--grey"> {sub_title}</p>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT (ROW) */}
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-6 order-last order-md-2">
              <div className="txt-block left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="s-24 w-700">{heading1}</h5>
                  {/* Text */}
                  <p>{paragraph1}</p>
                </div>{" "}
                {/* END TEXT BOX */}
                {/* TEXT BOX */}
                <div className="txt-box mb-0">
                  {/* Title */}
                  <h5 className="s-24 w-700">{heading2}</h5>
                  {/* Text */}
                  <p>{paragraph2}</p>
                  {/* List */}
                  <ul className="simple-list">
                    {points?.map((point, index) => (
                      <li key={point?.id} className="list-item">
                        <p>{point?.point}</p>
                      </li>
                    ))}
                  </ul>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block right-column wow fadeInLeft">
                <Image
                  className="img-fluid"
                  src={(background_image as Media)?.url || ""}
                  alt={(background_image as Media)?.alt || ""}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>{" "}
          {/* END SECTION CONTENT (ROW) */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
