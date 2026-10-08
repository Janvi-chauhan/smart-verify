import {
  BriefcaseBusiness,
  Database,
  Building2,
  FileSearch,
} from "lucide-react";

const steps = [
  {
    icon: BriefcaseBusiness,
    title: "Fetch employment records",
    description:
      "Access UAN/EPFO records to verify employee details, joining and exit dates, and PF contribution history.",
  },
  {
    icon: Database,
    title: "Verify income data",
    description:
      "Use employer-submitted TDS filings to retrieve available quarterly income information.",
  },
  {
    icon: Building2,
    title: "Get structured results",
    description:
      "Receive clean, machine-readable JSON that can plug directly into lending, onboarding, and HR workflows.",
  },
  {
    icon: FileSearch,
    title: "Test before going live",
    description:
      "Use sandbox access to test the integration before connecting to live traffic.",
  },
];

const VerificationProcess = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Top light line */}
      <div style={{ height: "8px", width: "100%", backgroundColor: "#f6f6f8" }} />

      {/* OUTER WRAPPER */}
      <div
        className="verification-wrapper"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        {/* Heading Area */}
        <div
          className="verification-heading-area"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Left Heading */}
          <div className="verification-heading-left" style={{ maxWidth: "570px" }}>
            <h2
              className="verification-heading"
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-1.2px",
                color: "#4b4b4b",
                margin: 0,
              }}
            >
              How Our Employee &amp; Income
              <br />
              Verification Works
            </h2>
          </div>

          {/* Right Description */}
          <div
            className="verification-heading-right"
            style={{ maxWidth: "310px", paddingTop: "8px" }}
          >
            <p
              className="verification-subtext"
              style={{
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#555555",
                margin: 0,
              }}
            >
              Verify employment and income using trusted
              <br className="verification-br" />
              records with fast, integration-ready results.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div
          className="verification-grid"
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="verification-step"
                style={{
                  position: "relative",
                  minHeight: "180px",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingLeft: index > 0 ? "32px" : "0",
                  paddingRight: "16px",
                  borderLeft: index > 0 ? "1px solid #dcdcdc" : "none",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    height: "32px",
                    width: "32px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Icon
                    strokeWidth={2}
                    style={{ width: "32px", height: "32px", color: "#5144d9" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="verification-step-title"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "#505050",
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="verification-step-desc"
                  style={{
                    marginTop: "10px",
                    maxWidth: "240px",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#6b6b6b",
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom light line */}
      <div style={{ height: "8px", width: "100%", backgroundColor: "#f6f6f8" }} />

      {/* RESPONSIVE STYLES */}
      <style>
        {`
          /* ================================
             TABLET (768px - 1024px)
          ================================= */
          @media (max-width: 1024px) {
            .verification-wrapper {
              padding-top: 48px !important;
              padding-bottom: 48px !important;
            }

            .verification-heading {
              font-size: 34px !important;
            }

            .verification-subtext {
              font-size: 12px !important;
            }

            .verification-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              margin-top: 60px !important;
              row-gap: 40px;
            }

            .verification-step {
              padding-left: 24px !important;
              padding-right: 24px !important;
              min-height: 160px !important;
            }

            .verification-step-title {
              font-size: 15px !important;
            }

            .verification-step-desc {
              font-size: 12px !important;
            }
          }

          /* ================================
             MOBILE (<768px)
          ================================= */
          @media (max-width: 768px) {
            .verification-wrapper {
              padding-top: 36px !important;
              padding-bottom: 36px !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }

            /* Heading aur description stack ho jayein */
            .verification-heading-area {
              flex-direction: column !important;
              gap: 16px !important;
            }

            .verification-heading-left {
              max-width: 100% !important;
            }

            .verification-heading-right {
              max-width: 100% !important;
              padding-top: 0 !important;
            }

            .verification-heading {
              font-size: 28px !important;
              letter-spacing: -0.6px !important;
            }

            .verification-subtext {
              font-size: 13px !important;
            }

            .verification-br {
              display: none !important;
            }

            /* Grid 1 column */
            .verification-grid {
              grid-template-columns: 1fr !important;
              margin-top: 40px !important;
              row-gap: 32px;
            }

            /* Border left hatao, top border lagao */
            .verification-step {
              padding-left: 0 !important;
              padding-right: 0 !important;
              padding-top: 20px !important;
              padding-bottom: 20px !important;
              min-height: auto !important;
              border-left: none !important;
              border-top: 1px solid #dcdcdc;
            }

            .verification-step:first-child {
              border-top: none !important;
              padding-top: 0 !important;
            }

            .verification-step-title {
              font-size: 15px !important;
            }

            .verification-step-desc {
              font-size: 13px !important;
              max-width: 100% !important;
            }
          }

          /* ================================
             SMALL MOBILE (<420px)
          ================================= */
          @media (max-width: 420px) {
            .verification-heading {
              font-size: 24px !important;
            }

            .verification-subtext {
              font-size: 12px !important;
            }

            .verification-step-title {
              font-size: 14px !important;
            }

            .verification-step-desc {
              font-size: 12px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default VerificationProcess;