import React from 'react';
import ProjectCard from './ProjectCard';
import hangout from '../assets/images/hangout_logo.png';
import parrot from '../assets/images/Parrot.png';
import pill from '../assets/images/PillPacker.png';
import aita from '../assets/images/logo.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hangout!',
      description: "Informal event planning tool developed using Next.js and MongoDB. \
        Real-time events monitoring, instant notifications, \
        and support for creation, storage, and sharing of users personalized events.",
      image: hangout,
      gitLink: 'https://github.com/enternal-L/hang-out',
      textLim: 14
    },
    {
      title: 'Aitah',
      description: "Reddit-based classifier developed using React and Python (FastAPI). \
        Using a naive bag-of-words model to classify thousands of posts on the subreddit AITA. \
        Features single-word probability to educate users on model biases.",
      gitLink: 'https://github.com/enternal-L/AITA-Classifier',
      image: aita,
      textLim: 15
    },
    {
      title: 'Parrot Producer',
      description: 'DAW plugin developed using C++ JUCE Framework. Instant audio processing with GUI, allowing manual tuning of Frequency, Gain, Quality and EQ',
      image: parrot,
      gitLink: 'https://github.com/masterspin/Parrot',
      textLim: 6
    },
    {
      title: 'Pill Packer',
      description: 'Pill packing software developed using Python. For ENGR100-850, by Arjun, Brian, Daniel, Eric, and Marvin.',
      image: pill,
      gitLink: '',
      textLim: 6
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-16 py-8">
      <h2 className="text-2xl font-semibold mb-4">I try to build projects</h2>
      <div className="carousel-container">
        <div className="flex flex-wrap justify-center gap-4 overflow-auto w-full h-72 p-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              gitLink={project.gitLink}
              textLim={project.textLim}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 