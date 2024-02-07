"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Quran Website",
    description:
      "Designed a Quran app offering advanced features: powerful word search, recitation by Surah, and Parah tracking. Seamlessly merging technology with spirituality, creating a profound and enriching user experience.",
    image: "/images/projects/quran1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UkkashAhmad/Quran",
    previewUrl: "https://quranpakk.netlify.app/",
  },
  {
    id: 2,
    title: "MERN Social App",
    description:
      "Engineered a streamlined MERN (MongoDB, Express.js, React, Node.js) project—Lite Social App. Seamlessly blending modern design with robust functionality, it facilitates social connections through efficient data management and engaging user interactions.",
    image: "/images/projects/social.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UkkashAhmad/SOCIALMEDIA",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Admin Panel",
    description:
      "Developed a sleek MERN (MongoDB, Express.js, React, Node.js) Lite Social Admin Panel, empowering administrators with intuitive controls, real-time analytics, and efficient data management. Elevating user management and content oversight for seamless administration.",
    image: "/images/projects/panel.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UkkashAhmad/ADMINPANEL",
    previewUrl: "https://isdpadminpanel.netlify.app/",
  },
  {
    id: 4,
    title: "NextJs Food Ordering Application",
    description:
      "Experienced full-stack developer specializing in building robust food ordering applications with CRUD functionality, admin panels, and integrated Stripe payment methods. Dedicated to delivering seamless user experiences and scalable solutions.",
    image: "/images/projects/food.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/UkkashAhmad/Food-Ordering-App",
    previewUrl: "https://ukkash-food-ordering-app.vercel.app/",
  },
  {
    id: 5,
    title: "MERN CRUD App",
    description: "CRUD operations With Random Ayan at Header",
    image: "/images/projects/crud_ayah.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UkkashAhmad/CRUD_WITH_RANDOM_AYAH",
    previewUrl: "https://crudwithayah.netlify.app/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

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
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
