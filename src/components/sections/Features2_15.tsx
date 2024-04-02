import Image from "next/image";
import f04 from "/public/images/f_04.png";
import f04Dark from "/public/images/f_04_dark.png";
import f05 from "/public/images/f_05.png";
import f05Dark from "/public/images/f_05_dark.png";
import f08 from "/public/images/f_08.png";
import f08Dark from "/public/images/f_08_dark.png";

export default function Features2_15() {
  return (
    <>
      <section id="features-2" className="pt-100 features-section division">
        <div className="container">
          {/* FEATURES-2 WRAPPER */}
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-3">
              {/* FEATURE BOX #1 */}
              <div className="col">
                <div className="fbox-2 fb-1 wow fadeInUp">
                  {/* Image */}
                  <div className="fbox-img gr--whitesmoke h-175">
                    <Image
                      className="img-fluid light-theme-img"
                      src={f04}
                      alt="feature-image"
                    />
                    <Image
                      className="img-fluid dark-theme-img"
                      src={f04Dark}
                      alt="feature-image"
                    />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    <h6 className="s-22 w-700">End-to-End Easy</h6>
                    <p>
                      Luctus egestas augue undo ultrice aliquam in lacus congue
                      dapibus
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END FEATURE BOX #1 */}
              {/* FEATURE BOX #2 */}
              <div className="col">
                <div className="fbox-2 fb-2 wow fadeInUp">
                  {/* Image */}
                  <div className="fbox-img gr--whitesmoke h-175">
                    <Image
                      className="img-fluid light-theme-img"
                      src={f08}
                      alt="feature-image"
                    />
                    <Image
                      className="img-fluid dark-theme-img"
                      src={f08Dark}
                      alt="feature-image"
                    />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    <h6 className="s-22 w-700">Unique Elements</h6>
                    <p>
                      Tempor laoreet augue undo ultrice aliquam in lacusq luctus
                      feugiat
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END FEATURE BOX #2 */}
              {/* FEATURE BOX #3 */}
              <div className="col">
                <div className="fbox-2 fb-3 wow fadeInUp">
                  {/* Image */}
                  <div className="fbox-img gr--whitesmoke h-175">
                    <Image
                      className="img-fluid light-theme-img"
                      src={f05}
                      alt="feature-image"
                    />
                    <Image
                      className="img-fluid dark-theme-img"
                      src={f05Dark}
                      alt="feature-image"
                    />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    <h6 className="s-22 w-700">Extensions &amp; Addons</h6>
                    <p>
                      Egestas luctus augue undo ultrice aliquam in lacus feugiat
                      cursus
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END FEATURE BOX #3 */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-2 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
