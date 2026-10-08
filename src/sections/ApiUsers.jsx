import apiUsersImage from "../assets/api-users.png";
import {
  FileCheck2,
  Landmark,
  BriefcaseBusiness,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

const users = [
  {
    title: "Lenders & NBFCs",
    description: "Verify income and employment before loan approval.",
    icon: FileCheck2,
    color: "#6DD2A5",
    
  },
  {
    title: "Staffing & Recruitment",
    description: "Confirm candidate employment history faster.",
    icon: Landmark,
    color: "#6042FFCC",
    
  },
  {
    title: "Banks & Card Issuers",
    description: "Validate income beyond applicant-provided payslips.",
    icon: BriefcaseBusiness,
    color: "#FE9A9C",
    
  },
  {
    title: "Gig & Logistics Platforms",
    description: "Verify worker employment during onboarding.",
    icon: ShieldCheck,
    color: "#A2CEF5",
    
  },
  {
    title: "Insurance Providers",
    description:
      "Validate employment and income for applications and claims.",
    icon: ShoppingCart,
    color: "#846CFFCC",
    
  },
];

const ApiUsers = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* OUTER WRAPPER - Inline style forces center alignment */}
      <div
        className="relative w-full"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "48px",
          paddingBottom: "48px",
        }}
      >
        {/* SECTION HEADER */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-[28px] font-normal leading-[1.1] tracking-[-1px] text-[#4b4b4b] sm:text-[32px] md:text-[36px] lg:text-[38px]">
            Who Actually Uses These APIs
          </h2>

          <p className="mt-5 max-w-[570px] text-[11px] leading-[1.5] text-[#444444] sm:text-[12px]">
            Business Verification APIs work anywhere a company, vendor, or MSME
            needs to be checked before money or contracts change hands:
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          
          {/* LEFT - USER LIST */}
          <div className="flex w-full flex-col gap-[8px]">
            {users.map((user) => {
              const Icon = user.icon;

              return (
                <div
                  key={user.title}
                  className="
                    flex
                    min-h-[68px]
                    w-full
                    items-center
                    gap-4
                    rounded-[8px]
                    border
                    border-[#e4e1ff]
                    bg-[#fdfcff]
                    px-4
                    py-3
                    transition-all
                    duration-200
                    hover:border-[#d4ceff]
                    hover:bg-[#fbfaff]
                  "
                >
                  {/* Icon with background color */}
                  <div
                    className="
                      flex
                      h-[40px]
                      w-[40px]
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-[8px]
                    "
                    style={{
                      backgroundColor: user.bgColor,
                    }}
                  >
                    <Icon
                      className="h-[30px] w-[30px]"
                      style={{
                        color: user.color,
                        fill: user.color
                      }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-[14px] font-medium leading-[1.3] text-[#414141]">
                      {user.title}
                    </h3>

                    <p className="mt-[4px] text-[11px] leading-[1.4] text-[#777777]">
                      {user.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex min-h-[280px] w-full items-center justify-center md:min-h-[320px] lg:min-h-[350px]">
            <img
              src={apiUsersImage}
              alt="Businesses using employee and income verification APIs"
              className="
                h-auto
                w-full
                max-w-[480px]
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApiUsers;