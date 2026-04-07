import { Hero } from "@/components/sections/Hero";
import { Platforms } from "@/components/sections/Platforms";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Products />
      <Process />
      <Testimonials />
      <FAQ />
    </>
  );
}
