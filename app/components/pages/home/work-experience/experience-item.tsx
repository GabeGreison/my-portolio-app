import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            src="https://images.unsplash.com/photo-1649877508777-1554357604eb"
            alt="last work logo"
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/the-brooklyn-brothers"
            target="_blank"
            className="text-gray-500 hover:text-cyan-500 transition-colors"
          >
            @ Empresa
          </a>
          <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
          <span className="text-gray-500">
            ago 2022 . O momento . (mó tempão)
          </span>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, delectus dicta. Repellendus vero, laboriosam eveniet
            eius at rem atque quod!
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>
      </div>
    </div>
  );
};
