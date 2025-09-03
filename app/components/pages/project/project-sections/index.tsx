import Image from "next/image";

const sections = [
  {
    title: "Login",
    image: "https://images.unsplash.com/photo-1651235732694-0d057ace2f30",
  },
  {
    title: "Home",
    image: "https://images.unsplash.com/photo-1558673532-102034a5f6e4",
  },
];

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            alt={`Imagem da sessão ${section.title}`}
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};
