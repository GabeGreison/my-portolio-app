import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { TechBadge } from "@/app/components/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { Link } from "@/app/components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url(/images/hero-bg.png) no-repeat center/cover, url(https://images.unsplash.com/photo-1634084462412-b54873c0a56d)no-repeat center/cover",
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Dogs"
        classname="text-center items-center sm:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Aqui vai ficar a descricao do projeto, blablabla e etc por enquanto vai
        só isso aqui mesmo pra fazer volume, valeu um abraco
      </p>

      <div className="h-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};
