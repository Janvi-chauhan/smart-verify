import heroBg from "../assets/images/hero-bg.png";

const Icons = {
  SlowHR: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5144d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6" />
      <path d="M23 11h-6" />
    </svg>
  ),
  EasyIncome: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5144d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  DelayedLoan: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5144d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <path d="M7 15h0" />
      <path d="M12 15h0" />
    </svg>
  ),
  LostCandidates: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5144d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  IncompleteIncome: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5144d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M6 8h4" />
      <path d="M6 12h8" />
    </svg>
  ),
  TrustedRecords: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5144d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

const features = [
  {
    title: "Slow HR Verification",
    description: "Phone calls and unanswered emails can delay employment checks for days.",
    icon: Icons.SlowHR,
  },
  {
    title: "Easy-to-edit income proof",
    description: "Paystubs and documents can be manipulated, making fraud harder to detect.",
    icon: Icons.EasyIncome,
  },
  {
    title: "Delayed loan disbursals",
    description: "Verification bottlenecks slow down lending decisions and customer onboarding.",
    icon: Icons.DelayedLoan,
  },
  {
    title: "Lost candidates",
    description: "Staffing agencies risk losing candidates to competitors with faster hiring processes.",
    icon: Icons.LostCandidates,
  },
  {
    title: "Incomplete income verification",
    description: "Payroll and bank statements don't confirm where someone actually works.",
    icon: Icons.IncompleteIncome,
  },
  {
    title: "Need for trusted records",
    description: "Businesses need reliable employment and income data that applicants cannot alter.",
    icon: Icons.TrustedRecords,
  },
];

const ManualChecks = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ position: "relative" }}
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
        }}
      />

      {/* RIGHT PURPLE GRADIENT */}
      <div
        className="manual-checks-gradient"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "25%",
          background:
            "linear-gradient(to left, #F4F0FF 0%, #FAF7FF 50%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* OUTER WRAPPER */}
      <div
        className="manual-checks-wrapper"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Heading Section */}
        <div style={{ maxWidth: "700px" }}>
          <h2
            className="manual-checks-heading"
            style={{
              fontSize: "42px",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              color: "#333333",
            }}
          >
            Why Manual Employment
            <br />
            Checks Slow Everyone Down
          </h2>

          <p
            className="manual-checks-subtext"
            style={{
              marginTop: "16px",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#666666",
            }}
          >
            Manual verification creates delays, fraud risks, and missed opportunities.
          </p>
        </div>

        {/* Grid Cards Section */}
        <div
          className="manual-checks-grid"
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid #E5E7EB",
          }}
        >
          {features.map((feature, index) => {
            const isLastColumn = (index + 1) % 3 === 0;
            const isLastRow = index >= 3;

            return (
              <div
                key={feature.title}
                className="manual-checks-card"
                style={{
                  minHeight: "220px",
                  padding: "32px",
                  borderRight: !isLastColumn ? "1px solid #E5E7EB" : "none",
                  borderBottom: !isLastRow ? "1px solid #E5E7EB" : "none",
                }}
              >
                <div style={{ marginBottom: "20px" }}>{feature.icon}</div>

                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#333333",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    marginTop: "12px",
                    maxWidth: "280px",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#666666",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>
        {`
          /* TABLET (768px - 1024px) */
          @media (max-width: 1024px) {
            .manual-checks-wrapper {
              padding-top: 60px !important;
              padding-bottom: 60px !important;
            }
            .manual-checks-heading {
              font-size: 36px !important;
            }
            .manual-checks-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .manual-checks-card {
              min-height: 200px !important;
              padding: 24px !important;
            }
          }

          /* MOBILE (<768px) */
          @media (max-width: 768px) {
            .manual-checks-wrapper {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            .manual-checks-heading {
              font-size: 28px !important;
              letter-spacing: -0.5px !important;
            }
            .manual-checks-subtext {
              font-size: 13px !important;
            }
            .manual-checks-grid {
              grid-template-columns: 1fr !important;
              margin-top: 32px !important;
            }
            .manual-checks-card {
              min-height: auto !important;
              padding: 20px !important;
            }
            .manual-checks-gradient {
              width: 35% !important;
            }
          }

          /* SMALL MOBILE (<420px) */
          @media (max-width: 420px) {
            .manual-checks-heading {
              font-size: 24px !important;
            }
            .manual-checks-card {
              padding: 16px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ManualChecks;