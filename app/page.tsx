import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
}
