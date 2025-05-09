import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/GabeGreison",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/gabriel-greison-b88b77223/",
    icon: <TbBrandLinkedin />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-cyan-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gabriel Greison</h2>

          <div>
            <p className="text-gray-400 my-6 text-sm sm:text-base">
              Olá, meu nome é gabriel greison e este é apenas um texto para que
              eu possa Lorem ipsum dolor sit amet consectetur adipisicing eli
            </p>

            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <TechBadge name="Next.js" />
              ))}
            </div>
            <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
              <Button className="w-max shadow-button">
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>

              <div className="text-gray-600 text-2xl flex items-center h-29 gap-3">
                {MOCK_CONTACTS.map((contact, i) => (
                  <a
                    href={contact.url}
                    key={`contact- ${i}`}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.jpeg"
          alt="Foto de perfil do gabriel greison"
          className="rounded-xl w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};
