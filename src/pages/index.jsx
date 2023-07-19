import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/organisms/Hero";
import Services from "../components/organisms/Services";
import Benefits from "../components/organisms/Benefits";
import ImageSection from "../components/organisms/ImageSection";
import PostSection from "../components/organisms/PostSection";
import { useSlidesQuery } from "../hooks/useSlidesQuery";
import { useComparisionQuery } from "../hooks/useComparisionQuery";
import { useServicesQuery } from "../hooks/useServicesQuery";
import ".././styles/index.scss";
import Footer from "../components/organisms/Footer";
import GallerySection from "../components/organisms/GallerySection";

export default function Home() {
  const slidesData = useSlidesQuery();
  const servicesData = useServicesQuery();
  const imageSectionData = useComparisionQuery();

  return (
    <Layout>
      <Hero data={slidesData} />
      <Services data={servicesData} />
      <Benefits />
      <ImageSection data={imageSectionData} />
      <PostSection />
      <GallerySection />
      <Footer />
    </Layout>
  );
}
