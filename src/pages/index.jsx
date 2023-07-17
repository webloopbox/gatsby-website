import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/organisms/Hero";
import Services from "../components/organisms/Services";
import { useSlidesQuery } from "../hooks/useSlidesQuery";
import { useServicesQuery } from "../hooks/useServicesQuery";
import ".././styles/index.scss";

export default function Home() {
  const slidesData = useSlidesQuery();
  const servicesData = useServicesQuery();

  console.log("servicesData: ", servicesData);

  return (
    <Layout>
      <Hero data={slidesData} />
      <Services data={servicesData} />
    </Layout>
  );
}
