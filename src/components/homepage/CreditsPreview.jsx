import React from 'react'
import { ArrowRight, Award, Star, Mic } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CreditsPreview() {
    const categories = [
        {
            title: "Major Artists",
            icon: <Mic className="w-6 h-6" />,
            credits: ["Mario", "Adam Lambert", "Stefflon Don", "Kaash Paige"]
        },
        {
            title: "Media",
            icon: <Star className="w-6 h-6" />,
            credits: ["Good Morning America", "On Air with Ryan Seacrest", "My Little Pony Movie"]
        },
        {
            title: "Notable Venues",
            icon: <Award className="w-6 h-6" />,
            credits: ["NBA Playoff Games", "Pink Sweat$ Tour", "Post Malone Tour"]
        }
    ]

    return (
        <section className=' py-16'>
            <div className='container mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-12'>

                <div className='flex items-center gap-4 mb-4'>
                    <div className='h-[2px] bg-color30 flex-grow'></div>
                    <h2 className='text-4xl font-bold text-center'><span className='max600:hidden inline'>Featured</span> Credits</h2>
                    <div className='h-[2px] bg-color30 flex-grow'></div>
                </div>

                    {/* <h2 className='text-4xl font-bold mb-4'>Featured Credits</h2> */}
                    <p className='text-lg text-color10a/80 max-w-2xl mx-auto'>
                        From chart-topping collaborations to memorable performances, 
                        explore Palmer's diverse portfolio of work
                    </p>
                </div>

                {/* Credits Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                    {categories.map((category, index) => (
                        <div 
                            key={index}
                            className='border border-color30 bg-color60 p-6 md:block flex flex-col  items-center rounded-lg'
                        >
                            <div className='border border-color30 flex items-center  gap-3 mb-4 p-3 rounded-lg'>
                                {category.icon}
                                <h3 className='text-xl  font-bold'>{category.title}</h3>
                            </div>
                            <ul className='space-y-2'>
                                {category.credits.map((credit, idx) => (
                                    <li 
                                        key={idx}
                                        className='flex items-center gap-2'
                                    >
                                        <div className='w-1.5 h-1.5 bg-color30 rounded-full'></div>
                                        {credit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Call to Action
                <div className='text-center'>
                    <Link 
                        to="/credits" 
                        className='inline-flex items-center gap-2 text-color30 hover:text-opacity-80 transition-all group text-xl'
                    >
                        View All Credits 
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </Link>
                </div> */}
            </div>
        </section>
    )
}
