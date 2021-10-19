import {
  BenefitedPublic,
  Goals,
  Hero,
  MissionVisionValues,
  OurHistory,
  WhoWeAre,
  MeansOfAction,
} from "@components/Home";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Goals />
      <OurHistory />
      <BenefitedPublic />
      <MissionVisionValues />
      <MeansOfAction />
    </>
  );
}
