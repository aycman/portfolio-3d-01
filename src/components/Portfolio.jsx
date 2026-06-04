import React from 'react'
import {useState, useEffect} from 'react';

// an array of your projects
const projectsData = [
    {
        id: 1,
        title: 'E-Commerce',
        category: 'Web App',
        description: 'An exclusive online boutique offering a curated collection of authentic luxury watches with secure payment checkout.',
        image: 'https://placehold.co/600x400/1a1a1a/8b6c2e?text=E-Commerce',
        techStack: ['React', 'Tailwind', 'Redux'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 2,
        title: 'Planet Online Shop',
        category: 'Web App',
        description: 'An exclusive online boutique offering a curated collection of rare, healthy plants with secure payment checkout.',
        image: 'https://placehold.co/600x400/1a1a1a/8b6c2e?text=Planet-e-shop',
        techStack: ['React', 'Tailwind', 'Redux'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 3,
        title: 'AI Image Generator',
        category: 'Web App',
        description: 'An application that connects to OpenAI API to generate unique images based on user text prompts.',
        image: 'https://placehold.co/600x400/1a1a1a/8b6c2e?text=Under+Construction',
        techStack: ['React', 'Node.js', 'OpenAI'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 4,
        title: 'Real Estate Platform',
        category: 'Web App',
        description: 'A platform for buying and renting properties with an interactive map and advanced filtering.',
        image: 'https://placehold.co/600x400/1a1a1a/8b6c2e?text=Under+Construction',
        techStack: ['React', 'Firebase', 'Mapbox'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 5,
        title: 'Creative Agency Site',
        category: 'Landing Page',
        description: 'A highly animated, award-winning style portfolio website designed for a creative marketing agency.',
        image: 'https://placehold.co/600x400/1a1a1a/8b6c2e?text=Under+Construction',
        techStack: ['HTML/CSS', 'GSAP', 'JavaScript'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 6,
        title: 'Fitness Tracker UI',
        category: 'Mobile UI',
        description: 'A sleek and dark-themed user interface design for a daily fitness and workout tracking mobile application.',
        image: 'https://placehold.co/600x400/1a1a1a/8b6c2e?text=Under+Construction',
        techStack: ['Figma', 'UI/UX Design'],
        liveLink: '#',
        githubLink: '#'
    }
]

// extract projects categories to creating dynamic filtering buttons
const categories = ['All', ...new Set(projectsData.map(item => item.category))];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [isAnimating, setIsAnimating] = useState(false);

    // this part occurs the filter when the categories changes with an animation
    useEffect(() => {
        setIsAnimating(true);

        const timeout = setTimeout(() => {
            if(activeCategory === 'All') {
                setFilteredProjects(projectsData);
            }else{
                const filtered = projectsData.filter(project => project.category === activeCategory);
                setFilteredProjects(filtered);
            }
            setIsAnimating(false);
        }, 300); //300ms delay for animation

        return() => clearTimeout(timeout);
    }, [activeCategory]);

  return (
    <main className='h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-white relative flex flex-col items-center animate-fade-in'>

        {/* Header section */}
        <div className='max-w-7xl w-full text-center mb-12'>
            <h2 className='text-sm tracking-[0.3em] text-gray-400 mb-3 uppercase flex items-center justify-center gap-2'>
                <span className='w-8 h-[1px] bg-[#8b6c2e]'></span>
                Selected Works
                <span className='w-8 h-[1px] bg-[#8b6c2e]'></span>
            </h2>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#8b6c2e] via-[#ffbb34] to-[#8b6c2e] bg-clip-text text-transparent inline-block pb-2'>
                Featured Projects
            </h1>
            <p className='mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg'>
                A showcase of my recent work, blending creative design with robust functionality to deliver seamless digital experiences.
            </p>
        </div>

        {/* filter buttons */}
        <div className='mas-w-4xl w-full flex flex-wrap justify-center gap-3 md:gap-4 mb-16'>
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm
                    ${activeCategory === category 
                        ?   'bg-gradient-to-r from-[#8b6c2e] to-[#b89545] border-transparent text-white shadow-[0_0_20px_rgba(139,108,46,0,6)] scale-105'
                        :   'bg-black/40 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1'
                    }`}
                    >
                    {category}
                </button>
            ))}
        </div>

        {/* Projects grid */}
        <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {filteredProjects.map((project) => (
                <div
                    key={project.id}
                    className='group flex flex-col bg-black/40 border border-white/10 round-2xl overflow-hidden backdrop-blur-md hover:border-[#8b6c2e]/50 transition-all duration-500 hover:-translate-y-3 shadow-xl hover:shadow-[0_15px_40px_rgba(139,108,46,0.2)]'
                >
                    {/* Project image container */}
                    <div className='relative h-56 md:h-64 overflow-hidden bg-gray-900'>
                        <img 
                            src={project.image} 
                            alt={project.image} 
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100'
                            />
                            {/* overlay gradient */}
                            <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500'></div>

                            {/* Floating category Badge */}
                            <div className='absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 round-full text-xs font-bold tracking-wider text-[#8b6c2e] uppercase'>
                                {project.category}
                            </div>
                    </div>

                    {/* Project content */}
                    <div className='p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-black/50'>
                        <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-[#8b6c2e] transition-colors duration-300'>
                            {project.title}
                        </h3>
                        <p className='text-gray-400 text-sm mb-6 flex-grow leading-relaxed'>
                            {project.description}
                        </p>

                        {/* Tech stack tags */}
                        <div className='flex flex-wrap gap-2 mb-6'>
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className='px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-gray-300 group-hover:border-white/20 transition-colors'>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* links/buttons */}
                        <div className='flex items-center gap-4 mt-auto pt-5 border-t border-white/10'>
                            <a href={project.liveLink} target='_blank' rel='noreferrer' className='flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-[#8b6c2e]/10 rounded-lg text-white hover:bg-[#8b6c2e] transition-all duration-300 group/btn'>
                            {/* live view icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:animate-pulse">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Live Demo
                            </a>

                            <a href={project.githubLink} target='_blank' rel='noreferrer' className='flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300'>
                                {/* github icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                Source
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* bg image */}
        <img className='fixed -z-20 bg-cover min-w-full h-screen top-0 left-0' src="src/assets/background.png" alt="bg-img" />

        {/* overlay gradient fot better readability  */}
        <div className='fixed -z-10 inset-0 bg-black/10 pointer-events-none'></div>
    </main>
  );
};

export default Portfolio