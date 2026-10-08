import { useState } from "react";
import smartVerifyLogo from "../assets/smartverify-logo.svg";

const NAV_LINKS = ["Products", "Industries", "Use case", "Resources"];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      style={{
        position: "relative",
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid #D1D1D1",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="navbar-container"
        style={{
          maxWidth: "1920px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          height: "64px",
          paddingLeft: "200px",
          paddingRight: "150px",
        }}
      >
        {/* LOGO */}
        <a
          href="#"
          className="navbar-logo"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <img
            src={smartVerifyLogo}
            alt="SmartVerify"
            className="navbar-logo-img"
            style={{
              display: "block",
              height: "auto",
              width: "162px",
            }}
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav
          className="navbar-desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            marginLeft: "120px",
          }}
        >
          {NAV_LINKS.map((text) => (
            <NavItem key={text} text={text} />
          ))}
        </nav>

        {/* TALK TO SALES BUTTON (Desktop) */}
        <button
          type="button"
          className="navbar-sales-btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            backgroundColor: "#EA3369",
            color: "#ffffff",
            fontWeight: 400,
            lineHeight: 1,
            border: "none",
            cursor: "pointer",
            height: "38px",
            width: "144px",
            borderRadius: "10px",
            fontSize: "14px",
            marginLeft: "auto",
          }}
        >
          Talk to Sales
        </button>

        {/* HAMBURGER MENU BUTTON (Mobile) */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="navbar-hamburger"
          aria-label="Toggle menu"
          style={{
            display: "none",       // Desktop par hidden
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px",
            width: "40px",
            height: "40px",
            border: "1px solid #D1D1D1",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            cursor: "pointer",
            marginLeft: "auto",
            padding: 0,
          }}
        >
          <span style={{ display: "block", width: "18px", height: "2px", backgroundColor: "#4B4B4B" }} />
          <span style={{ display: "block", width: "18px", height: "2px", backgroundColor: "#4B4B4B" }} />
          <span style={{ display: "block", width: "18px", height: "2px", backgroundColor: "#4B4B4B" }} />
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenu && (
        <div
          className="navbar-mobile-menu"
          style={{
            borderTop: "1px solid #D1D1D1",
            backgroundColor: "#ffffff",
            padding: "16px 20px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {NAV_LINKS.map((text) => (
              <MobileNavItem key={text} text={text} />
            ))}
            <button
              type="button"
              style={{
                marginTop: "16px",
                width: "100%",
                height: "40px",
                backgroundColor: "#EA3369",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Talk to Sales
            </button>
          </nav>
        </div>
      )}

      {/* RESPONSIVE STYLES */}
      <style>
        {`
          /* TABLET (768px - 1024px) */
          @media (max-width: 1024px) {
            .navbar-container {
              padding-left: 40px !important;
              padding-right: 40px !important;
            }
            .navbar-desktop-nav {
              gap: 30px !important;
              margin-left: 60px !important;
            }
          }

          /* MOBILE (<768px) */
          @media (max-width: 768px) {
            .navbar-container {
              padding-left: 20px !important;
              padding-right: 20px !important;
              height: 60px !important;
            }
            .navbar-logo-img {
              width: 130px !important;
            }
            .navbar-desktop-nav {
              display: none !important;
            }
            .navbar-sales-btn {
              display: none !important;
            }
            .navbar-hamburger {
              display: flex !important;
            }
          }
        `}
      </style>
    </header>
  );
};

/* DESKTOP NAV ITEM */
const NavItem = ({ text }) => {
  return (
    <button
      type="button"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1,
        color: "#4B4B4B",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      {text}
      <svg
        width="12"
        height="7"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "12px", height: "auto", flexShrink: 0 }}
      >
        <path
          d="M1 1L4 4L7 1"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

/* MOBILE NAV ITEM */
const MobileNavItem = ({ text }) => {
  return (
    <button
      type="button"
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #EEEEEE",
        padding: "14px 0",
        textAlign: "left",
        fontSize: "14px",
        fontWeight: 400,
        color: "#4B4B4B",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      <span>{text}</span>
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L4 4L7 1"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Navbar;