import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrackingMap } from "@/components/TrackingMap";

const Tracking = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <TrackingMap />
    </main>
    <Footer />
  </div>
);

export default Tracking;
