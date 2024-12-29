import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPreview() {
    return (
        <section className='bg-color60 py-16'>
            <div className='container mx-auto'>
                {/* Grid Layout Container */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Left Column - Title and Main Content */}
                    <div className='space-y-6'>
                        {/* Section Title with decorative line */}
                        <div className='flex items-center gap-4'>
                            <h2 className='text-4xl font-bold'>About Palmer</h2>
                            <div className='h-[2px] bg-color30 flex-grow'></div>
                        </div>

                        {/* Main Text Content */}
                        <div className='space-y-4 text-lg'>
                            <p>
                                Palmer Reed is a chart-topping singer/songwriter whose creative touch has shaped hits across the music industry. From Ashlee Simpson-Ross and Evan Ross' debut single "I Do" to Kaash Paige's "Problems" featuring Isaiah Rashad, his songwriting prowess spans multiple genres and styles.
                            </p>
                            
                            <p>
                                Hailing from Orlando, Palmer's journey began with a deep passion for musical instruments, particularly the guitar. Today, his versatile songwriting transcends soul, R&B, hip-hop, pop, and country music genres, earning recognition from legendary producers like Verdine White of Earth, Wind & Fire.
                            </p>
                        </div>

                        {/* Read More Link */}
                        <Link 
                            to="/about" 
                            className='inline-flex items-center gap-2 text-color30 hover:text-opacity-80 transition-all group'
                        >
                            Read Full Bio 
                            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </Link>
                    </div>

                    {/* Right Column - Key Achievements */}
                    <div className='bg-white p-8 rounded-lg shadow'>
                        <h3 className='text-2xl font-bold mb-6 text-color30'>Career Highlights</h3>
                        
                        <div className='space-y-6'>
                            {/* Highlight Cards */}
                            <div className='space-y-4'>
                                <div className='border-l-4 border-color30 pl-4'>
                                    <h4 className='font-bold mb-1'>Billboard Success</h4>
                                    <p>"I Do" debuted at #6 on Billboard's Hot 100 pop chart</p>
                                </div>

                                <div className='border-l-4 border-color30 pl-4'>
                                    <h4 className='font-bold mb-1'>Notable Collaborations</h4>
                                    <p>Worked with Mario, Adam Lambert, Stefflon Don, and more</p>
                                </div>

                                <div className='border-l-4 border-color30 pl-4'>
                                    <h4 className='font-bold mb-1'>Live Performances</h4>
                                    <p>Good Morning America, NBA Playoff games, and major concert venues</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}