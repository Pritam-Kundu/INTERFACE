import React from 'react';
import { EditionPreview } from '../components/home/EditionPreview';
import { ArchiveSection } from '../components/home/ArchiveSection';

export const Home: React.FC = () => {
  return (
    <>
      <EditionPreview />
      <ArchiveSection />
    </>
  );
};
