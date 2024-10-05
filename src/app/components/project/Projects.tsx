interface Project {
id: number;
title: string;
href: string;
imageSrc: string;
imageAlt: string;
description: string;
}

// Maximo de 4 projetos nessa configuração, pq a tela fica sem scroll, se quiser por mais tem que mudar o css.
const projects: Project[] = [
{
  id: 1,
  title: 'Project A',
  href: '#',
  imageSrc: 'https://via.placeholder.com/400x300',
  imageAlt: 'Screenshot of Project A.',
  description: 'A web application built with React and Node.js.',
},
{
  id: 2,
  title: 'Project B',
  href: '#',
  imageSrc: 'https://via.placeholder.com/400x300',
  imageAlt: 'Screenshot of Project B.',
  description: 'An e-commerce platform with a custom CMS.',
},
{
  id: 3,
  title: 'Project C',
  href: '#',
  imageSrc: 'https://via.placeholder.com/400x300',
  imageAlt: 'Screenshot of Project C.',
  description: 'A mobile app built with React Native.',
},
{
  id: 4,
  title: 'Project D',
  href: '#',
  imageSrc: 'https://via.placeholder.com/400x300',
  imageAlt: 'Screenshot of Project D.',
  description: 'A web application built with Angular and NestJS.',
}

];

export default function Projects() {
return (
  <div id="project" className="min-h-screen">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight light:text-gray-900">Meus Projetos</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={project.imageAlt}
                src={project.imageSrc}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-bold">
                  <a href={project.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
