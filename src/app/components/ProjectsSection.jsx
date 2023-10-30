"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ebay ecommerce platform",
    description: "A fullstack ebay clone application created using NextJs, ReactJs, Prisma, Supabase, TailwindCss, Stripe, etc.",
    image: "/images/projects/ebay-ecom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vaibhavjs/ecom-ebay",
    previewUrl: "https://ecom-ebay.vercel.app/",
  },
  {
    id: 2,
    title: "Video streaming app",
    description: "A video streaming platform created using ReactJs and MaterialUI.",
    image: "/images/projects/vid-stream.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vaibhavjs/vid-stream",
    previewUrl: "https://vid-stream-deployed-env.vercel.app/",
  },
  {
    id: 3,
    title: "Sports news website",
    description: "A fully responsive website for sports related news developed using Vanilla Javascript, HTML & CSS.",
    image: "/images/projects/sports-news.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vaibhavjs/sports-news-website",
    previewUrl: "https://sports-espn.netlify.app/",
  },
  {
    id: 4,
    title: "Would You Rather game",
    description: "A simplified web version of popular game - Would you rather, created using React & Redux",
    image: "/images/projects/wyr-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vaibhavjs/w-y-r-game",
    previewUrl: "https://w-y-r-game.vercel.app/",
  },
  {
    id: 5,
    title: "Drawing Application",
    description: "A drawing application replicating features of classic MS Paint.",
    image: "/images/projects/draw-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vaibhavjs/DrawingApp",
    previewUrl: "https://presentation-itp2.netlify.app/",
  },
  {
    id: 6,
    title: "University Admissions Predictor",
    description: "A machine learning project for predicting university admissions using deep neural networks.",
    image: "/images/projects/dl-ml.jpg",
    tag: ["All", "AI / ML"],
    gitUrl: "https://github.com/vaibhavjs/ml-deep-neural-networks",
    previewUrl: "https://github.com/vaibhavjs/ml-deep-neural-networks/blob/main/Deep%20Neural%20Networks%20-%20Predicting%20University%20Admissions.ipynb",
  },
  {
    id: 7,
    title: "IMDB movie reviews - Sentiment Analysis",
    description: "A Natural Language Processing project to perform Sentiment Analysis on the IMDB movie reviews dataset",
    image: "/images/projects/nlp.png",
    tag: ["All", "AI / ML"],
    gitUrl: "https://github.com/vaibhavjs/AI-powered-Sentiment-Analysis",
    previewUrl: "https://github.com/vaibhavjs/AI-powered-Sentiment-Analysis/blob/main/NLP_Sentiment_Analyis.ipynb",
  }
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
          name="AI / ML"
          isSelected={tag === "AI / ML"}
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
