import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/organisms/Hero";
import Services from "../components/organisms/Services";
import Benefits from "../components/organisms/Benefits";
import Comparison from "../components/organisms/Comparison";
import PostSection from "../components/organisms/PostSection";
import { useSlidesQuery } from "../hooks/useSlidesQuery";
import { useComparisionQuery } from "../hooks/useComparisionQuery";
import { useServicesQuery } from "../hooks/useServicesQuery";
import ".././styles/index.scss";

export default function Home() {
  const slidesData = useSlidesQuery();
  const servicesData = useServicesQuery();
  const comparisionData = useComparisionQuery();

  return (
    <Layout>
      <Hero data={slidesData} />
      <Services data={servicesData} />
      <Benefits />
      <Comparison data={comparisionData} />
      <PostSection />
    </Layout>
  );
}
