import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ManualChecks from "./sections/ManualChecks";
import VerificationProcess from "./sections/VerificationProcess";
import ApiVerification from "./sections/ApiVerification";
import ApiUsers from "./sections/ApiUsers";
import FinalSection from "./sections/FinalSection";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <ManualChecks />
        <VerificationProcess />
        <ApiVerification />
        <ApiUsers />
        <FinalSection />
      </main>
    </div>
  );
}

export default App;