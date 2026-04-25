import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
