import Image from "next/image";
import VideoPopup from "../elements/VidepPopup";
import dashboard02 from "/public/images/dashboard-02.png";

export default function Lnk2_22() {
  return (
    <>
      <section id="lnk-2" className="pt-100 ct-08 content-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                {/* Title */}
                <h2 className="s-50 w-700">
                  Track the progress towards objectives with key results
                </h2>
                {/* Text */}
                <p className="s-21">
                  Ligula risus auctor tempus magna feugiat lacinia.
                </p>
              </div>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="row">
            <div className="col">
              <div className="img-block video-preview wow fadeInUp">
                {/* Play Icon */}
                <VideoPopup style={2} />
                {/* Preview Image */}
                <Image
                  className="img-fluid"
                  src={dashboard02}
                  alt="video-preview"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
