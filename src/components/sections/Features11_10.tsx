export default function Features11_10({
  title,
  subtitle,
  features,
}: {
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    id?: string | null;
  }[];
}) {
  const listOfIcons = [
    {
      icon: (
        <div className="fbox-ico-wrap">
          <div className="fbox-ico ico-50">
            <div className="shape-ico color--theme">
              {/* Vector Icon */}
              <span className="flaticon-graphics" />
              {/* Shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
      key: "graphics",
    },
    {
      icon: (
        <div className="fbox-ico-wrap">
          <div className="fbox-ico ico-50">
            <div className="shape-ico color--theme">
              {/* Vector Icon */}
              <span className="flaticon-idea" />
              {/* Shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
      key: "idea",
    },
    {
      icon: (
        <div className="fbox-ico-wrap">
          <div className="fbox-ico ico-50">
            <div className="shape-ico color--theme">
              {/* Vector Icon */}
              <span className="flaticon-graphic" />
              {/* Shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
      key: "graphic",
    },
    {
      icon: (
        <div className="fbox-ico-wrap">
          <div className="fbox-ico ico-50">
            <div className="shape-ico color--theme">
              {/* Vector Icon */}
              <span className="flaticon-wireframe" />
              {/* Shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
      key: "wireframe",
    },
    {
      icon: (
        <div className="fbox-ico-wrap">
          <div className="fbox-ico ico-50">
            <div className="shape-ico color--theme">
              {/* Vector Icon */}
              <span className="flaticon-trophy" />
              {/* Shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
      key: "trophy",
    },
    {
      icon: (
        <div className="fbox-ico-wrap">
          <div className="fbox-ico ico-50">
            <div className="shape-ico color--theme">
              {/* Vector Icon */}
              <span className="flaticon-search-engine-1" />
              {/* Shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
      key: "engine",
    },
  ];
  return (
    <>
      <section
        id="features-11"
        className="pt-90 pb-100 features-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                {/* Title */}
                <h2 className="s-50 w-700">{title}</h2>
                {/* Text */}
                <p className="s-21 color--grey">{subtitle}</p>
              </div>
            </div>
          </div>
          {/* FEATURES-11 WRAPPER */}
          <div className="fbox-wrapper">
            <div className="row row-cols-1 row-cols-md-2 rows-3">
              {/* FEATURE BOX #2 */}
              {features?.map((feature, index) => (
                <div key={feature?.id} className="col">
                  <div className={`fbox-11 fb-${index + 1} wow fadeInUp`}>
                    {/* Icon */}
                    {listOfIcons[index]?.icon} {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">{feature?.title}</h6>
                      <p>{feature?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* END FEATURE BOX #2 */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-11 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
