"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Visite virtuelle 360 musée",
    description: "Technologies: réalité virtuelle et augmentée, Unity, Blender, Adobe illustrator ,Casque vr , C#, NodeJS, NextJS, Mongodb",
    image: "/images/projects/1.jpeg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Une plateforme médicale de géolocalisation des centres de santé au Maroc",
    description: "Technologies:  ReactJs,NodeJS,Express,MongoDB  (MERN) Cyclic ,Docker , web Scraping and Sentiment Analysis",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "“Potholes Detection” Application",
    description: "Technologies: Yolov8 , roboflow, pytorch, python.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
       {}
        <button
      className={` rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      Mes Projets
    </button>
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
