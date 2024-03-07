import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { CardTeam } from "./components/CardTeam";
import { CardAbout } from "./components/CardAbout";
import { TextRevealCardPreview } from "./components/TextShow";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        {/* HOME PAGE */}

        <TextRevealCardPreview />

      </div>

      {/* ABOUT US PAGE */}
      <div className="h-screen" id="about">
        <CardAbout />
      </div>

      <div className="h-screen" id="team">
        <CardTeam />
      </div>

      {/* PRICE */}
      <div className="h-screen" id="price">
        <Card />
      </div>

      <Footer />
    </div>
  );
}
