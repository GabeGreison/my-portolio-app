import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-3">
          aqui vai um texto sobre como eu sou trabalhando Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aspernatur sequi quae, earum
          numquam rem animi nostrum asperiores voluptas magnam explicabo!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};
