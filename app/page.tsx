import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Principles from "@/components/Principles";
import Impact from "@/components/Impact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Navigation />
      <Hero />
      <Legacy />
      <Principles />
      <Impact />
      <CallToAction />
      <Footer />
    </main>
  );
}
