import React from 'react';
import { Hero } from '../components/home/Hero';
import { EditionPreview } from '../components/home/EditionPreview';
import { ArchiveSection } from '../components/home/ArchiveSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <EditionPreview />
      <ArchiveSection />
    </>
  );
};
