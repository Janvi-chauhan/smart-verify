import smartVerifyLogo from "../assets/smartverify-logo.svg";
import {
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Settings2,
} from "lucide-react";

const faqs = [
  "What is UAN verification, and why does it matter for employment checks?",
  "Is there a way to verify income without contacting the applicant's employer?",
  "What is the difference between the UAN Basic and UAN Advanced APIs?",
  "How to use the TDS Quarterly API for income verification?",
  "How fast do these verification APIs return results?",
  "How is SmartVerify different from other verification providers?",
];

const FinalSection = () => {
  return (
    <div
      className="final-wrapper"
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "24px",
        paddingRight: "24px",
        width: "100%",
      }}
    >
      {/* =====================================================
          CTA SECTION
      ====================================================== */}

      <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <div
          className="cta-box"
          style={{
            backgroundColor: "#7351FF",
            borderRadius: "8px",
            padding: "56px 56px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ maxWidth: "560px" }}>
            <h2
              className="cta-heading"
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 500,
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Get Started with Employee
              <br />
              Verification APIs
            </h2>

            <p
              className="cta-subtext"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "13px",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              Integration follows the same path as SmartVerify's other
              verification APIs: sign up for API access, configure a key,
              and test each endpoint in the sandbox environment before
              moving to production. Documentation covers request and
              response formats for every API listed above, so a developer
              can have UAN and TDS verification running in a test
              environment within a day.
            </p>

            <button
              type="button"
              className="cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "999px",
                backgroundColor: "#FF3D72",
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: 500,
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
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#FF3D72",
                }}
              >
                <ArrowUpRight style={{ width: "10px", height: "10px" }} strokeWidth={2.5} />
              </span>
            </button>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div
            className="cta-illustration"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              position: "relative",
              width: "320px",
              height: "180px",
            }}
          >
            {/* Main document */}
            <div
              style={{
                position: "relative",
                width: "100px",
                height: "130px",
                borderRadius: "4px",
                backgroundColor: "#ffffff",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                zIndex: 5,
              }}
            >
              <div style={{ position: "absolute", left: "16px", right: "16px", top: "20px", height: "6px", backgroundColor: "#e8e8ef", borderRadius: "2px" }} />
              <div style={{ position: "absolute", left: "16px", right: "22px", top: "40px", height: "4px", backgroundColor: "#ededf2", borderRadius: "2px" }} />
              <div style={{ position: "absolute", left: "16px", right: "16px", top: "56px", height: "4px", backgroundColor: "#ededf2", borderRadius: "2px" }} />
              <div style={{ position: "absolute", left: "16px", right: "28px", top: "72px", height: "4px", backgroundColor: "#ededf2", borderRadius: "2px" }} />
              <div style={{ position: "absolute", left: "16px", right: "16px", top: "88px", height: "4px", backgroundColor: "#ededf2", borderRadius: "2px" }} />
              <div style={{ position: "absolute", left: "16px", right: "24px", top: "104px", height: "4px", backgroundColor: "#ededf2", borderRadius: "2px" }} />
            </div>

            {/* Shield - top left */}
            <div style={{ position: "absolute", left: "8px", top: "10px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", backgroundColor: "#ffffff", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", zIndex: 6 }}>
              <ShieldCheck style={{ width: "28px", height: "28px", color: "#7351ff" }} strokeWidth={1.8} />
            </div>

            {/* Shield - top right */}
            <div style={{ position: "absolute", right: "8px", top: "10px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "#ffffff", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", zIndex: 6 }}>
              <ShieldCheck style={{ width: "28px", height: "28px", color: "#7351ff" }} strokeWidth={1.8} />
            </div>

            {/* Settings - bottom left */}
            <div style={{ position: "absolute", bottom: "10px", left: "8px", width: "52px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", backgroundColor: "#ffffff", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", zIndex: 6 }}>
              <Settings2 style={{ width: "24px", height: "24px", color: "#7351ff" }} strokeWidth={1.7} />
            </div>

            {/* Shield - bottom right */}
            <div style={{ position: "absolute", bottom: "10px", right: "8px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", backgroundColor: "#ffffff", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", zIndex: 6 }}>
              <ShieldCheck style={{ width: "26px", height: "26px", color: "#7351ff" }} strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}

      <div
        className="faq-outer"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          backgroundColor: "#7351FF",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        <div
          className="faq-inner"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "64px",
            maxWidth: "1100px",
            margin: "0 auto",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          {/* FAQ HEADING */}
          <div className="faq-heading-wrapper" style={{ flexShrink: 0, maxWidth: "240px" }}>
            <h2
              className="faq-heading"
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          {/* FAQ LIST */}
          <div className="faq-list" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
            {faqs.map((question, index) => (
              <details key={question} style={{ width: "100%" }}>
                <summary
                  className="faq-item"
                  style={{
                    display: "flex",
                    minHeight: "48px",
                    cursor: "pointer",
                    listStyle: "none",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(255,255,255,0.35)",
                    padding: "12px 18px",
                    fontSize: "13px",
                    color: "#ffffff",
                  }}
                >
                  <span>{question}</span>
                  <ChevronDown style={{ width: "14px", height: "14px", flexShrink: 0, marginLeft: "12px" }} strokeWidth={2} />
                </summary>
                <div
                  className="faq-answer"
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderTop: "none",
                    padding: "12px 18px",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  This information is available through SmartVerify's employee and income verification APIs.
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div className="footer-brand">
            <div style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1 }}>
              <span style={{ color: "#FF3B70" }}>Smart</span>
              <span style={{ color: "#5B4ADF" }}>Verify</span>
            </div>
            <p style={{ marginTop: "12px", maxWidth: "220px", fontSize: "12px", lineHeight: 1.5, color: "#555555" }}>
              Extra onboarding steps turn your customers away. SmartVerify's APIs verify identity, documents, and businesses, letting real users pass while blocking fraud.
            </p>
          </div>

          <div className="footer-col">
            <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#444444" }}>Products</h3>
            <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", listStyle: "none", padding: 0 }}>
              {["OCR KYC PAN", "Aadhaar OCR API", "OCR API Check", "OCR API GST"].map((item) => (
                <li key={item}><a href="#" style={{ fontSize: "12px", color: "#555555", textDecoration: "none" }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#444444" }}>Industries</h3>
            <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", listStyle: "none", padding: 0 }}>
              {["Fintech", "B2B SaaS", "Banking & Financial Services", "Education", "Insurance", "Logistics"].map((item) => (
                <li key={item}><a href="#" style={{ fontSize: "12px", color: "#555555", textDecoration: "none" }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#444444" }}>Resources</h3>
            <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", listStyle: "none", padding: 0 }}>
              {["Blog", "FAQs", "API Documentation"].map((item) => (
                <li key={item}><a href="#" style={{ fontSize: "12px", color: "#555555", textDecoration: "none" }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#444444" }}>Company</h3>
            <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", listStyle: "none", padding: 0 }}>
              {["About Us", "Contact Sales"].map((item) => (
                <li key={item}><a href="#" style={{ fontSize: "12px", color: "#555555", textDecoration: "none" }}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="footer-divider"
          style={{
            marginTop: "32px",
            height: "1px",
            backgroundColor: "#eeeeee",
            maxWidth: "1100px",
            margin: "32px auto 0",
          }}
        />

        <div
          className="footer-bottom"
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1100px",
            margin: "20px auto 0",
          }}
        >
          <p style={{ fontSize: "12px", color: "#777777" }}>Copyright ©2026 SmartVerify</p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {["f", "𝕏", "◎"].map((icon) => (
              <a
                key={icon}
                href="#"
                style={{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid #eeeeee",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#6655df",
                  textDecoration: "none",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* =====================================================
          RESPONSIVE STYLES
      ====================================================== */}

      <style>
        {`
          /* ================================
             TABLET (768px - 1024px)
          ================================= */
          @media (max-width: 1024px) {
            .cta-box {
              padding: 40px 32px !important;
              gap: 24px !important;
            }
            .cta-heading {
              font-size: 28px !important;
            }
            .cta-subtext {
              font-size: 12px !important;
            }
            .cta-illustration {
              width: 260px !important;
              height: 160px !important;
            }
            .faq-outer {
              padding-top: 48px !important;
              padding-bottom: 48px !important;
            }
            .faq-inner {
              gap: 40px !important;
              padding-left: 32px !important;
              padding-right: 32px !important;
            }
            .faq-heading {
              font-size: 28px !important;
            }
            .faq-item, .faq-answer {
              font-size: 12px !important;
            }
            .footer-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }

          /* ================================
             MOBILE (<768px)
          ================================= */
          @media (max-width: 768px) {
            .final-wrapper {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            /* CTA box - column */
            .cta-box {
              flex-direction: column !important;
              padding: 32px 24px !important;
              gap: 32px !important;
            }
            .cta-heading {
              font-size: 24px !important;
            }
            .cta-subtext {
              font-size: 12px !important;
            }
            .cta-illustration {
              width: 100% !important;
              max-width: 260px !important;
              height: 160px !important;
            }

            /* FAQ section - column */
            .faq-outer {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }
            .faq-inner {
              flex-direction: column !important;
              gap: 24px !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            .faq-heading-wrapper {
              max-width: 100% !important;
            }
            .faq-heading {
              font-size: 24px !important;
              line-height: 1.2 !important;
            }
            .faq-item, .faq-answer {
              font-size: 12px !important;
            }

            /* Footer - 2 columns */
            .footer-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px !important;
            }
            .footer-brand {
              grid-column: 1 / -1 !important;
            }
            .footer-bottom {
              flex-direction: column !important;
              gap: 16px !important;
              align-items: flex-start !important;
            }
            .footer-divider {
              max-width: 100% !important;
            }
          }

          /* ================================
             SMALL MOBILE (<420px)
          ================================= */
          @media (max-width: 420px) {
            .cta-box {
              padding: 24px 20px !important;
            }
            .cta-heading {
              font-size: 20px !important;
            }
            .cta-subtext {
              font-size: 11px !important;
            }
            .faq-heading {
              font-size: 22px !important;
            }
            .faq-item, .faq-answer {
              font-size: 11px !important;
              padding: 10px 14px !important;
            }
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .footer-brand {
              grid-column: auto !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FinalSection;