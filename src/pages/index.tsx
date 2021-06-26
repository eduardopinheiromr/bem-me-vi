import Hero from "components/Home/Hero";
import WhoWeAre from "components/Home/WhoWeAre";
import Goals from "components/Home/Goals";
import Projects from "components/Home/Projects";
import Links from "components/Home/Links";
import Subscription from "../components/Home/Subscription";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Goals />
      <Projects />
      <Links />
      <Subscription />
    </>
  );
}
