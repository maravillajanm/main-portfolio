import React from 'react';

interface HeroProps {
  title?: string;
  description?: string;
  primaryCta?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title = 'Fullstack JavaScript Developer',
  description = 'Fullstack JavaScript developer building AI-enabled CMS platforms and content-heavy websites. Focused on performance, editor experience, and solving the messy problems that come with scale.',
  primaryCta = { label: 'About Me' },
  secondaryCta = { label: 'Contact Me' },
}) => {
  return (
    <section className="w-full">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-6 text-xl text-gray-700 leading-8">{description}</p>
      </div>

      <div className="flex mt-10 gap-4">
        <button
          onClick={primaryCta.onClick}
          className="border-2 border-transparent px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-secondary hover:border-primary cursor-pointer"
        >
          {primaryCta.label}
        </button>
        <button
          onClick={secondaryCta.onClick}
          className="border-2 border-transparent px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-secondary hover:border-primary cursor-pointer"
        >
          {secondaryCta.label}
        </button>
      </div>
    </section>
  );
};

export default Hero;