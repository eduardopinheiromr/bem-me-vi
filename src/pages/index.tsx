import {
  BenefitedPublic,
  Goals,
  Hero,
  MissionVisionValues,
  OurHistory,
  Subscription,
  WhoWeAre,
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
      <Subscription />
    </>
  );
}
