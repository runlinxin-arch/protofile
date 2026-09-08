import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoCarousel from "@/components/PhotoCarousel";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <PhotoCarousel />
        <Works />
      </main>
      <Footer />
    </>
  );
}
