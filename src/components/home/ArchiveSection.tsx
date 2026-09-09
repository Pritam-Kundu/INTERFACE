import React from 'react';
import { Link } from 'react-router-dom';
import { pastEditions } from '../../data/magazines';
import { SectionHeading } from '../ui/SectionHeading';
import { MagazineCover } from '../ui/MagazineCover';
import { Button } from '../ui/Button';

export const ArchiveSection: React.FC = () => {
  return (
    <section id="archive" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading 
            title="Previous Editions"
            subtitle="Archive"
          />
          <Link to="/archive" className="hidden md:inline-flex">
            <Button variant="ghost">
              VIEW FULL ARCHIVE
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {pastEditions.map((edition, index) => (
            <div 
              key={edition.id} 
              className="group flex flex-col space-y-6"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link to={`/read/${edition.year}`} className="w-full max-w-sm mx-auto block focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
                <MagazineCover edition={edition} />
              </Link>
              <div className="text-center space-y-3 px-4">
                <h4 className="text-xl font-editorial font-bold text-primary">
                  {edition.title} {edition.year}
                </h4>
                <p className="text-sm text-secondary line-clamp-2">
                  {edition.description}
                </p>
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/read/${edition.year}`} className="text-accent text-sm font-semibold tracking-wider hover:underline focus:outline-none">
                    READ EDITION
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Link to="/archive">
            <Button variant="outline">
              VIEW FULL ARCHIVE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

