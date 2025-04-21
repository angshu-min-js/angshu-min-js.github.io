
import { cn } from "@/lib/utils";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
}

export const Hero = ({ name, title, tagline }: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-14">
      <h1 className={cn("font-playfair text-5xl sm:text-6xl font-bold text-primary mb-2 tracking-tight")}>
        {name}
      </h1>
      <h2 className={cn("font-sans text-xl text-gray-400 mb-4 uppercase tracking-widest")}>
        {title}
      </h2>
      <p className="max-w-xl text-lg text-gray-700 text-center">
        {tagline}
      </p>
    </section>
  );
};

