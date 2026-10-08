import apiVerification from "../assets/api-verification.png";

const ApiVerification = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      {/* OUTER WRAPPER - Centered */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "48px",
          paddingBottom: "48px",
        }}
      >
        {/* HEADING + DESCRIPTION - Side by Side */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {/* LEFT HEADING */}
          <div style={{ maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-1px",
                color: "#4b4b4b",
                margin: 0,
              }}
            >
              Our APIs Behind Employee &amp;
              <br />
              Income Verification
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div style={{ maxWidth: "320px", paddingTop: "8px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#5b5b5b",
                margin: 0,
              }}
            >
              A complete verification flow, from finding the employee record
              to validating income.
            </p>
          </div>
        </div>

        {/* CONTENT IMAGE - Centered */}
        <div
          style={{
            marginTop: "48px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={apiVerification}
            alt="SmartVerify employee and income verification APIs"
            style={{
              display: "block",
              height: "auto",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ApiVerification;