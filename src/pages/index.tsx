import {
  BenefitedPublic,
  Goals,
  Hero,
  MissionVisionValues,
  OurHistory,
  WhoWeAre,
  MeansOfAction,
  Mentorships,
  Results,
  Contacts,
  Participate,
  Partners,
} from "@components/Home";
import PageTags from "@components/PageTags";

export default function Home() {
  return (
    <>
      <PageTags />
      <Hero />
      <WhoWeAre />
      <Goals />
      <OurHistory />
      <BenefitedPublic />
      <MissionVisionValues />
      <MeansOfAction />
      <Mentorships />
      <Results />
      <Contacts />
      <Participate />
      <Partners />
    </>
  );
}
