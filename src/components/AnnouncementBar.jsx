const AnnouncementBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#ef2461",
        padding: "6px 16px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        width: "100%",
      }}
    >
      <p
        style={{
          color: "#ffffff",
          fontSize: "11px",
          fontWeight: 400,
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        10+ years of powering businesses with secure Banking, Payments,
        Travel, and Verification APIs.
      </p>

      <button
        style={{
          backgroundColor: "transparent",
          border: "1px solid #ffffff",
          borderRadius: "999px",
          padding: "3px 14px",
          color: "#ffffff",
          fontSize: "10px",
          fontWeight: 400,
          lineHeight: 1,
          cursor: "pointer",
        }}
      >
        Book A Demo
      </button>
    </div>
  );
};

export default AnnouncementBar;