import heroPerson from "../assets/images/hero-person.png";
import heroBg from "../assets/images/hero-bg.png";
import { Folder } from "lucide-react";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={heroBg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      {/* CONTENT WRAPPER */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
          paddingLeft: "2px",
          paddingTop: "56px",
          paddingBottom: "0px",
          boxSizing: "border-box",
        }}
      >
        <div className="hero-grid">
          {/* LEFT CONTENT */}
          <div
            style={{
              maxWidth: "800px",
              alignSelf: "center",
              paddingBottom: "56px",
            }}
          >
            {/* HEADING - Figma exact */}
           <h1
  className="hero-heading"
  style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "60px",
    fontWeight: 400,
    lineHeight: "68px",
    letterSpacing: "-3.2px",
    marginBottom: "24px",
    background:
      "linear-gradient(90deg, #0A0400 0%, #0A0400 45%, #4D3ECA 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }}
>
  <span
    style={{
      whiteSpace: "nowrap",
      display: "inline-block",
    }}
  >
    Employee &amp; Income Verification
  </span>
  <br />
  APIs for Faster Hiring
</h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#000000",
                marginBottom: "25px",
                maxWidth: "550px",
                letterSpacing: "-0.9px",
                paddingTop:"20px"
                
                
              }}
            >
               SmartVerify's Employee & Income Verification APIs replace estimation with data pulled directly from UAN 
              records, EPFO contribution history, and TDS filings. Businesses get a job history and income picture
              in a short time, and they get it without leaning on the candidate or applicant to hand over anything more.
            </p>
            

            <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", paddingTop:"25px" }}>
              <button
                style={{
                  borderRadius: "999px",
                  backgroundColor: "#5144d9",
                  padding: "12px 50px",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Documentation
              </button>

              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "999px",
                  backgroundColor: "#ef2461",
                  padding: "15px 40px",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Book a Demo
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    color: "#ef2461",
                    fontSize: "12px",
                  }}
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT HERO VISUAL */}
          <div
            style={{
              position: "relative",
              minHeight: "550px",
              height: "550px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/* PERSON IMAGE */}
            <div
              style={{
                position: "absolute",
                zIndex: 10,
                bottom: "0",
                left: "48%",
                transform: "translateX(-50%)",
                width: "min(600px, 600%)",
                height: "min(550px, 200%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <img
                src={heroPerson}
                alt="SmartVerify employee verification"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
              />
            </div>

            {/* DOTTED CONNECTING LINES */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 5,
                pointerEvents: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="45%"
                y1="22%"
                x2="52%"
                y2="35%"
                stroke="#c7c7d1"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="32%"
                y1="78%"
                x2="48%"
                y2="82%"
                stroke="#c7c7d1"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>

            {/* VERIFICATION CARD */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                right: "55%",
                zIndex: 20,
                width: "180px",
                borderRadius: "14px",
                border: "1px solid rgba(220, 220, 230, 0.7)",
                backgroundColor: "rgba(250, 250, 255, 0.6)",
                padding: "6px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#4b4b4b",
                    marginBottom: "12px",
                  }}
                >
                  Verify your employee via
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {["Bank", "Payroll", "HRMS"].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "11px",
                        color: "#6b6b6b",
                        border: "1px solid #ececf2",
                        borderRadius: "6px",
                        padding: "7px 10px",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {item}
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          border: "1.5px solid #4ade80",
                          color: "#4ade80",
                          fontSize: "9px",
                        }}
                      >
                        ✓
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    marginTop: "12px",
                    width: "100%",
                    borderRadius: "6px",
                    backgroundColor: "#5144d9",
                    padding: "8px",
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Consent
                </button>
              </div>
            </div>

            {/* APPLICANT CARD */}
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                right: "95%",
                zIndex: 20,
                width: "180px",
                borderRadius: "14px",
                border: "1px solid rgba(220, 220, 230, 0.7)",
                backgroundColor: "rgba(250, 250, 255, 0.6)",
                padding: "6px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {["Applicant", "Employment", "Alt Income"].map((item) => (
                  <div
                    key={item}
                    style={{
                      position: "relative",
                      fontSize: "11px",
                      color: "#6b6b6b",
                      border: "1px solid #ececf2",
                      borderRadius: "6px",
                      padding: "7px 10px",
                    }}
                  >
                    {item}

                    {item === "Applicant" && (
                      <Folder
                        size={20}
                        strokeWidth={2}
                        style={{
                          position: "absolute",
                          right: "8px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#4f46c8",
                          fill: "#4f46c8",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: stretch;
          }

          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .hero-grid > div:first-child {
              max-width: 650px !important;
              padding-bottom: 20px !important;
            }

            .hero-heading {
              font-size: 44px !important;
              line-height: 50px !important;
              letter-spacing: -2px !important;
            }

            .hero-grid > div:last-child {
              min-height: 500px !important;
              height: 500px !important;
            }
          }

          @media (max-width: 600px) {
            .hero-heading {
              font-size: 34px !important;
              line-height: 40px !important;
              letter-spacing: -1.5px !important;
            }

            .hero-grid p {
              font-size: 14px !important;
            }

            .hero-grid > div:last-child {
              min-height: 450px !important;
              height: 450px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;