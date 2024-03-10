"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";



const FRONTEND_SKILLS = ["React", "Redux", "HTML", "CSS", "JavaScript"];
const BACKEND_SKILLS = ["NodeJs", "Express", "SpringBoot", "Sequelize", "PHP", "Laravel", "Symfony"];
const DATABASE_SKILLS = ["Hadoop","MongoDB","MYSQL"];
const GESTION_SKILLS = ["Jira","Trello","Notion"];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
      <div className="mr-8">
        <ul className="list-disc pl-2">
          <p>FrontEnd</p>
          {FRONTEND_SKILLS.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mr-8">
        <ul className="list-disc pl-2">
          <p>BackEnd</p>
          {BACKEND_SKILLS.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mr-8">
        <ul className="list-disc pl-2">
          <p>DataBase</p>
          {DATABASE_SKILLS.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mr-8">
        <ul className="list-disc pl-2">
          <p>Gestion</p>
          {GESTION_SKILLS.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>    
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> Diplôme d'études universitaires scientifiques et techniques.</li>
        <li>Diplôme d'ingénieur en réseaux et systèmes d'information</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Spring - Ecosystem and Core</li>
        <li>Scrum Foundations Professional Certificate (SFPC) </li>
        <li>CertificateOfCompletion_Become a FullStack Web Developer</li>
        <li>Algorand  Specialist Certificate</li>
        <li>Algorand  Developer Certificate</li>
        <li>Algorand  Fundamentals Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-base lg:text-lg">
          Je suis un développeur web full-stack avec une passion pour la création d'applications web interactives et réactives.
          Je suis fermement déterminée à poursuivre mon apprentissage et mon développement afin de fournir des solutions informatiques de qualité supérieure à mes clients et à mon entreprise.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            &nbsp;Compétences&nbsp;
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            &nbsp;Éducation&nbsp;
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            &nbsp;Certifications&nbsp;
          </TabButton>
          </div>
          <div className="mt-8">
          {activeTabData && activeTabData.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
