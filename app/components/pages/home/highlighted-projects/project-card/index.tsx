import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="thumbnail"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] object-cover rounded-lg lg:min-h-full"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          TitleMockup
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam
          dolore nulla consectetur ut laborum repellat facere necessitatibus
          culpa molestiae temporibus quaerat dolores corrupti voluptatibus,
          neque reprehenderit, ratione voluptas! Veniam, recusandae. Natus sit
          aut cumque dolores molestias perferendis voluptatem illum.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>
        <Link href="/projects/project">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
