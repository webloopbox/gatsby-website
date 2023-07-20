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
import { useGalleryQuery } from "../hooks/useGalleryQuery";
import { useGetPostsQuery } from "../hooks/useGetPostsQuery";
import ".././styles/index.scss";
import GallerySection from "../components/organisms/GallerySection";

export default function Home({ location }) {
  const slidesData = useSlidesQuery();
  const servicesData = useServicesQuery();
  const imageSectionData = useComparisionQuery();
  const galleryData = useGalleryQuery();
  const postsData = useGetPostsQuery();

  return (
    <Layout location={location}>
      <Hero data={slidesData} />
      <Services data={servicesData} />
      <Benefits />
      <ImageSection data={imageSectionData} />
      <PostSection data={postsData} />
      <GallerySection data={galleryData} />
    </Layout>
  );
}
