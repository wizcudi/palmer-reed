
import React, { useState } from 'react'
import { ArrowRight, PlayCircle} from 'lucide-react'

import Anchor from '../premade/Anchor'
import Button from '../premade/Button'

// Reuse the audio initialization helper - think of this like setting up a sound system
const initializeAudio = () => {
    if (typeof window !== "undefined") {
        window.addEventListener('click', function initAudio() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.resume();
            window.removeEventListener('click', initAudio);
        }, { once: true });
    }
};



export default function MusicPreview() {

   


    const featuredProjects = [
        {
            title: "I Do",
            artist: "Ashlee Simpson-Ross & Evan Ross",
            achievement: "Billboard Hot 100 #6",
            year: "2019"
        },
        {
            title: "Problems",
            artist: "Kaash Paige ft. Isaiah Rashad",
            achievement: "Top 20 R&B Charts",
            year: "2022"
        },
        {
            title: "Bonkers",
            artist: "Chanel West Coast ft. Dreezy",
            achievement: "Featured Release",
            year: "2023"
        }
    ]

    
    return (
        <section className='bg-color60 py-16'>
            <div className='container mx-auto'>
                {/* Section Header */}
                <div className='flex items-center gap-4 mb-12'>
                    <div className='h-[2px] bg-color30 flex-grow'></div>
                    <h2 className='text-4xl font-bold text-center'><span className='max600:hidden inline'>Featured</span> Music</h2>
                    <div className='h-[2px] bg-color30 flex-grow'></div>
                </div>

                {/* Two Column Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
                    {/* Left Column - SoundCloud Player */}
                    <div className='bg-white p-6 rounded-lg shadow'>
                        {/* <h3 className='text-2xl font-bold mb-4'>Latest Releases</h3> */}
                        <iframe 
                            width="100%" 
                            height="300" 
                            allow="autoplay" 
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1173470386&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                            className='mb-4'
                        ></iframe>
                        
                    </div>

                    {/* Right Column - Featured Projects */}
                    <div className='bg-white p-6 rounded-lg shadow'>
                        <h3 className='text-2xl font-bold mb-4'>Notable Projects</h3>
                        <div className='space-y-6'>
                            {featuredProjects.map((project, index) => (
                                <div 
                                    key={index}
                                    className='border-l-4 border-color30 pl-4 py-2'
                                >
                                    <h4 className='font-bold text-lg'>{project.title}</h4>
                                    <p className='text-gray-600'>{project.artist}</p>
                                    <div className='flex items-center gap-4 mt-2 text-sm'>
                                        <span className='bg-color30 text-white px-2 py-1 rounded'>
                                            {project.achievement}
                                        </span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>

                {/* Streaming Links */}
                <div className='flex flex-row max700:flex-col gap-4'>
                    <Anchor 
                        href="https://linktr.ee/palmerreedmusic"
                        variant="primary"
                    >
                        <PlayCircle className='w-5 h-5' />
                        <span>Stream on All Platforms</span>
                    </Anchor>

                    <Button 
                        to="/music" 
                        variant="secondary"
                    >
                        View Full Discography 
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </Button>
                </div>

                


            </div>
        </section>
    )
}