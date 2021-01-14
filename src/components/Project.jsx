
import React, { useEffect, useState  } from "react";

import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          
          title,
          date,
          school,
          description,
          projectType,
          link,
          tags,
          mainImage{
            asset->{
              _id,
              url
            },
            alt

          }
      }`) 
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>

        <section className =" grid ms:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="bg-blue-300   relative rounded-lg shadow-x2  p-2">
              
                 <h3 className=" text-center text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-2">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">School</strong>:{" "}
                    {project.school}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="text-center my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <span
                className ="block h-20 w-20 relative rounded-lg shadow leading-snug bg-white border-l-8 "
                key= {index}>
                
                     <img  src={project.mainImage.asset.url} alt={project.mainImage.alt}
                     className="w-full h-full rounded-r object-cover absulte"
                     />

                </span>

                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View the project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>

                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}