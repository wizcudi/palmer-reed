import React from 'react'
import { PlayCircle, Music, Disc, HeadphonesIcon, MailIcon } from 'lucide-react'
import Palmer from '../../assets/PalmerReed.png'
import Anchor from '../premade/Anchor'

export default function Hero() {
    return (
        <div className='container mx-auto py-12'>
            {/* Main Hero Container - Using Grid for responsive layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                {/* Left Column - Text Content */}
                <div className='order-1 lg:order-1 max600:order-2 '>
                    <p className='text-base sm:text-xl'>
                        Singer | Songwriter | Musician | Producer
                    </p>
                    <h1 className='text-5xl sm:text-6xl font-bold mt-2'>
                        Palmer Reed
                    </h1>
                    <p className='mt-4 text-lg sm:text-2xl max-w-2xl'>
                        Chart-topping songwriter behind hits for Ashlee Simpson-Ross, Kaash Paige, and more. 
                        Creating soul-stirring music across R&B, hip-hop, and pop.
                    </p>
                    
                    {/* Stats with Icons */}
                    <div className='mt-6 flex flex-col sm:flex-row gap-6 text-sm sm:text-base'>
                        <div className='flex items-center gap-2'>
                            <Disc className='w-5 h-5' />
                            <p>100M+ Album Streams</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <PlayCircle className='w-5 h-5' />
                            <p>550.5K Monthly Listeners</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Music className='w-5 h-5' />
                            <p>150.9K Weekly Streams</p>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className='mt-8 flex flex-row max600:flex-col gap-4'>
                        <Anchor 
                            href="https://linktr.ee/palmerreedmusic"
                            variant="primary"
                        >
                            <HeadphonesIcon className='w-5 h-5' />
                            <span>Listen to Music</span>
                        </Anchor>

                        <Anchor 
                            href="mailto:Frank@7keymedia.com"  // Replace with actual email
                            variant="secondary"
                        >
                            <MailIcon className='w-5 h-5' />
                            <span>Get in Touch</span>
                        </Anchor>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className='order-2 lg:order-2 max600:order-1 '>
                    <img 
                        src={Palmer} 
                        alt="Palmer Reed" 
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
            </div>
        </div>
    )
}
