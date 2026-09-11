import React from 'react';
import { BookOpen, GraduationCap, Building2, Code2, Users, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full relative min-h-[40vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background/100 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-editorial font-bold text-primary mb-6 tracking-tight">
            The Spirit of <span className="text-accent italic">INTERFACE</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Exploring the frontiers of technology, software engineering, and the creative minds behind the Department of Computer Applications.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
        
        {/* Left Column - The Magazine */}
        <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 fill-mode-both">
          
          <div className="group bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-8 hover:bg-surface/60 hover:border-accent/50 transition-all duration-500 shadow-2xl">
            <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <BookOpen className="text-accent w-7 h-7" />
            </div>
            <h2 className="text-3xl font-editorial font-bold text-primary mb-4">Our Magazine</h2>
            <p className="text-secondary leading-relaxed mb-6">
              INTERFACE is the official annual departmental magazine published by the Department of Computer Applications. It serves as a dynamic canvas where students articulate their research, showcase innovative projects, and discuss emerging paradigms in the tech industry.
            </p>
            <p className="text-secondary leading-relaxed">
              From deep dives into artificial intelligence and agile methodologies to the nuances of modern web design, INTERFACE bridges the gap between theoretical computer science and practical, industry-driven applications.
            </p>
          </div>

          <div className="group bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-8 hover:bg-surface/60 hover:border-accent/50 transition-all duration-500 shadow-2xl">
            <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Lightbulb className="text-accent w-7 h-7" />
            </div>
            <h2 className="text-3xl font-editorial font-bold text-primary mb-4">The Vision</h2>
            <p className="text-secondary leading-relaxed">
              We believe that technological advancement thrives on shared knowledge. Our vision is to foster a culture of collaborative learning, pushing boundaries, and encouraging students to become not just consumers of technology, but its creators and thought leaders.
            </p>
          </div>

        </div>

        {/* Right Column - The Department & Institution */}
        <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 fill-mode-both">
          
          <div className="group bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-8 hover:bg-surface/60 hover:border-accent/50 transition-all duration-500 shadow-2xl">
            <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Code2 className="text-accent w-7 h-7" />
            </div>
            <h2 className="text-3xl font-editorial font-bold text-primary mb-4">The Department</h2>
            <p className="text-secondary leading-relaxed">
              The Master of Computer Applications (MCA) department is a hub of rigorous academic pursuit and technical excellence. We prepare postgraduates to tackle complex engineering challenges through a curriculum that emphasizes both robust theoretical foundations and cutting-edge practical skills.
            </p>
          </div>

          <div className="group bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-8 hover:bg-surface/60 hover:border-accent/50 transition-all duration-500 shadow-2xl">
            <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Building2 className="text-accent w-7 h-7" />
            </div>
            <h2 className="text-3xl font-editorial font-bold text-primary mb-4">The Institution</h2>
            <p className="text-secondary leading-relaxed mb-6">
              Kalyani Government Engineering College (KGEC) is a premier engineering institution in West Bengal, renowned for its academic rigor and vibrant student community. Situated in the tranquil environment of Kalyani, the college provides the perfect ecosystem for innovation and holistic development.
            </p>
            <div className="flex items-center space-x-3 text-secondary/80">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm tracking-wide">Fostering Excellence Since Inception</span>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Team Banner */}
      <section className="w-full bg-surface/20 border-t border-border mt-16 py-20 animate-in fade-in duration-1000 delay-700 fill-mode-both">
        <div className="container mx-auto px-6 text-center">
          <Users className="w-12 h-12 text-accent mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-editorial font-bold text-primary mb-6">The Editorial Team</h2>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Crafting this magazine is a monumental effort. We extend our deepest gratitude to the dedicated editorial team, the contributing writers, the visionary designers, and the supportive faculty members who make each edition a reality.
          </p>
          <div className="inline-block px-8 py-3 rounded-full border border-border bg-surface/50 text-sm tracking-widest text-primary uppercase shadow-lg">
            Together We Create
          </div>
        </div>
      </section>
      
    </div>
  );
};
