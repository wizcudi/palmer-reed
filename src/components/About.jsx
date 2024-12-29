import React from 'react'
import PalmerPlayingGuitar from '../assets/PalmerPlayingGuitar.jpg'

export default function About() {
    return (
        <div className='container mx-auto py-16'>
            {/* Hero Section */}
            <div className='text-center mb-16'>
                <h1 className='text-5xl max600:text-4xl font-bold mb-6'>WHO IS PALMER REED</h1>
                <div className='w-24 h-1 bg-color30 mx-auto'></div>
            </div>

            {/* Main Content Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
                {/* Image Column */}
                <div className='order-2 lg:order-1'>
                    <img 
                        src={PalmerPlayingGuitar} 
                        alt="Palmer Reed playing guitar" 
                        className='rounded-lg shadow-lg w-full'
                    />
                </div>

                {/* Initial Bio Column */}
                <div className='order-1 lg:order-2 space-y-6'>
                    <p className='text-xl font-semibold text-color30'>
                        Chart-topping singer/songwriter, multi-instrumentalist, and producer
                    </p>
                    <p>
                        Palmer Reed is a chart-topping singer/songwriter known for such songs as Ashlee Simpson-Ross and Evan Ross' debut single "I Do", Kaash Paige's "Problems" featuring Isaiah Rashad and Chanel West Coasts latest hit "Bonkers" featuring Dreezy. Palmer Reed also wrote and performed "I'll Be Around" on the official soundtrack for Hasbro's My Little Pony Movie.
                    </p>
                </div>
            </div>

            {/* Extended Bio Sections */}
            <div className='max-w-3xl mx-auto space-y-8'>
                {/* Musical Journey Section */}
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Musical Journey</h2>
                    <p>
                        Hailing from Orlando, Palmer developed a passion for musical instruments early in life. His creative abilities grew as a songwriter by playing the acoustic and electric guitar, respectively. As a result, Palmer's appreciation for various musical styles continued to grow and shape his current range, which begins with songs of universal love for all things and transcends soul, R&B, hip-hop, pop and country music genres.
                    </p>
                </div>

                {/* Professional Achievements Section */}
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Industry Recognition</h2>
                    <p>
                        Palmer's voice and songwriting abilities has garnered the attention of todays top producers that include Manny Fresh, The Baka Boyz, and living legend Verdine White (Earth, Wind & Fire). Palmer wrote and co-produced Ashlee and Evan's "I Do" record which debuted at #6 on Billboard's Hot 100 pop chart and #16 on Hot 100 overall in 2019.
                    </p>
                </div>

                {/* Collaborations & Performances */}
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Notable Performances & Collaborations</h2>
                    <p>
                        He has lent his writing talents to Mario, MAYDAY!, Adam Lambert, Stefflon Don, Kaash Paige and MTV personality and hip-hop artist Chanel West Coast as well as Hip Hop legends Twista, and Too $hort", and 5X world champion DJ CRAZE. In 2019, prior to the global pandemic he performed both the "Star Spangled Banner" and "O Canada" at Orlando Magic NBA Playoff games on two separate occasions. He has performed On Good Morning America, as well as On Air with Ryan Seacrest and opened for artists including Pink Sweat$, Talib Kweli, Afroman, Frankie Beverly and Maze, The Time, Obie Trice, Ashley Simpson, Evan Ross, Post Malone, The Isley Bros. and more.
                    </p>
                </div>

                {/* Stats Banner */}
                <div className='bg-color60 p-8 rounded-lg mt-12'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                        <div>
                            <p className='text-3xl font-bold text-color30'>100M+</p>
                            <p className='text-lg'>Album Streams</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-color30'>550.5K</p>
                            <p className='text-lg'>Monthly Listeners</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-color30'>150.9K</p>
                            <p className='text-lg'>Weekly Streams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
