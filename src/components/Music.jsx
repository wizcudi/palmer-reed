import React, { useState  } from 'react';
import { PlayCircle, Video, Radio, ChevronDown, ChevronUp } from 'lucide-react';



// Create a reusable ShowMore button component to reduce repetition
const ShowMoreButton = ({ 
    totalItems, 
    itemsPerPage, 
    isShowingAll, 
    onToggle,
    className = "" 
}) => {
    // Only show the button if there are more items than the per-page limit
    if (totalItems <= itemsPerPage) return null;

    return (
        <button
            onClick={onToggle}
            className={`flex items-center gap-2 px-6 py-2 bg-color30 text-white rounded-full hover:bg-opacity-90 transition-all ${className}`}
        >
            {isShowingAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
                <>Show More ({totalItems - itemsPerPage} more) <ChevronDown className="w-4 h-4" /></>
            )}
        </button>
    );
};

// Create a reusable Media Grid component
const MediaGrid = ({ items, renderItem }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map(renderItem)}
    </div>
);

export default function Music() {
    // Updated musicTracks array with proper date objects
    const musicTracks = [
        {
            id: 1,
            title: "Can We Talk",
            artist: "Craze, Palmer Reed",
            embed: '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1576545334&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
            type: "Single",
            year: "2023",
            releaseDate: new Date('2023-06-15') // Added specific date
        },
        {
            id: 2,
            title: "TRUTH",
            artist: "Palmer Reed",
            embed: '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1503970288&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
            type: "Single",
            year: "2023",
            releaseDate: new Date('2023-08-20') // Added specific date
        },
        {
            id: 3,
            title: "Gifts",
            artist: "Palmer Reed",
            embed: '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1994331463&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
            type: "Single",
            year: "2023",
            releaseDate: new Date('2023-12-01') // Added specific date
        },
        {
            id: 4,
            title: "Smart",
            artist: "Palmer Reed",
            embed: '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266620525&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
            type: "Single",
            year: "2015",
            releaseDate: new Date('2015-12-01') // Added specific date
        }
    ];

    const musicVideos = [
        {
            id: 1,
            title: "TRUTH ",
            artist: "Palmer Reed",
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Scv7i2ME9H8?si=rrbHoxEeztgvIM8b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: "2023",
            releaseDate: new Date('2023-12-01')
        },
        {
            id: 2,
            title: 'Changes',
            artist: 'Palmer Reed',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RhyyXfphLLQ?si=qEvjuhNj6lwGhDXh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: '2015',
            releaseDate: new Date('2015-12-01')
        },
        {
            id: 3,
            title: "Run Away ( Live! on WPRK's)",
            artist: 'Palmer Reed',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qBKCKIvSPUo?si=gUWf8wwL0nWtRQpm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: '2012',
            releaseDate: new Date('2012-12-01')
        },
        // {
        //     id: ,
        //     title: '',
        //     artist: '',
        //     embed: '',
        //     year: '',
        //     releaseDate: new Date('')
        // },
    ];

    const videoPerformances = [
        {
            id: 1,
            title: "Broadway Girls Freestyle",
            venue: 'Mcqueens Social Lounge',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Yrv7jjjBgpY?si=pDS9QYG1U7ITJa03" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: "2023",
            releaseDate: new Date('2023-12-01')
        },
        {
            id: 2,
            title: "Fusion Awards",
            venue: 'The Abbey',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bJvl37fd-lA?si=lQ0nzH-L8IO_Ifaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: "2022",
            releaseDate: new Date('2022-10-01')
        },
        {
            id: 3,
            title: "Palmer Reed Recap",
            venue: 'The Beacham',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UajwfvSAMSo?si=QeTDOh-il_EewwnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: "2022",
            releaseDate: new Date('2022-12-01')
        },
        {
            id: 4,
            title: 'SMART (Live Acoustic Remix)',
            venue: '',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/VcJW-XKYn3g?si=WJEn9PNqaX3ZCx7V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: '2016',
            releaseDate: new Date('2016-8-01')
        },
        {
            id: 5,
            title: '"Trouble" (Ray LaMontagne Cover)',
            venue: 'Suburban Tap',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/rk7_3oRUBIM?si=PPu-6wCp7AqckWBj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: '2015',
            releaseDate: new Date('2015-8-01')
        },
        {
            id: 6,
            title: '"Changes" (Live Performance)',
            venue: "Eddie's Attic",
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/R5MmqAg4_VQ?si=Qz48q5zoWrkRwe8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: '2015',
            releaseDate: new Date('2015-10-01')
        },
        {
            id: 7,
            title: 'Orlando Magic vs. Toronto Raptors',
            venue: 'Magic Arena',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/updFpUkgbuQ?si=QXhMtvcEHfBmaXrK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            year: '2015',
            releaseDate: new Date('2015-7-01')
        },
        // {
        //     id: ,
        //     title: '',
        //     venue: '',
        //     embed: '',
        //     year: '',
        //     releaseDate: new Date('')
        // },
    ];

    // Consolidated state using an object
    const [showAll, setShowAll] = useState({
        tracks: false,
        videos: false,
        performances: false
    });

    // Configuration object for better organization
    const config = {
        itemsPerPage: {
            tracks: 3,
            videos: 2,
            performances: 2
        }
    };

    // Helper function to toggle show all state
    const toggleShowAll = (section) => {
        setShowAll(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Helper function to get visible items
    const getVisibleItems = (items, section) => {
        return showAll[section] 
            ? items 
            : items.slice(0, config.itemsPerPage[section]);
    };

    // Sort all media arrays by release date
    const sortByDate = (items) => [...items].sort((a, b) => b.releaseDate - a.releaseDate);

    const sortedTracks = sortByDate(musicTracks);
    const sortedVideos = sortByDate(musicVideos);
    const sortedPerformances = sortByDate(videoPerformances);

    // Get visible items for each section
    const visibleTracks = getVisibleItems(sortedTracks, 'tracks');
    const visibleVideos = getVisibleItems(sortedVideos, 'videos');
    const visiblePerformances = getVisibleItems(sortedPerformances, 'performances');

    // Render functions for different media types
    const renderTrack = (track) => (
        <div 
            key={track.id}
            className="p-6 bg-white shadow rounded-lg w-[300px] max1000:w-[400px] max900:w-[350px] max800:w-full"
        >
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold">{track.title}</h3>
                    <p className="text-gray-600">{track.artist}</p>
                </div>
                <div className="text-right">
                    <span className="bg-color30 text-white px-3 py-1 rounded-full text-sm">
                        {track.type}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{track.year}</p>
                </div>
            </div>
            <div 
                dangerouslySetInnerHTML={{ __html: track.embed }}
                className="w-full aspect-video"
            />
        </div>
    );

    const renderVideo = (video) => (
        <div 
            key={video.id}
            className="bg-white p-6 rounded-lg shadow"
        >
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold">{video.title}</h3>
                    <p className="text-gray-600">{video.artist}</p>
                </div>
                <p className="text-sm text-gray-500">{video.year}</p>
            </div>
            <div 
                dangerouslySetInnerHTML={{ __html: video.embed }}
                className="w-full aspect-video"
            />
        </div>
    );

    const renderPerformance = (performance) => (
        <div 
            key={performance.id}
            className="bg-white p-6 rounded-lg shadow"
        >
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold">{performance.title}</h3>
                    {performance.venue && (
                        <p className="text-gray-600">{performance.venue}</p>
                    )}
                </div>
                <p className="text-sm text-gray-500">{performance.year}</p>
            </div>
            <div 
                dangerouslySetInnerHTML={{ __html: performance.embed }}
                className="w-full aspect-video"
            />
        </div>
    );

    return (
        <div className="mx-auto py-16 max-w-[1000px]">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl max600:text-4xl font-bold mb-6">MUSIC</h1>
                <div className="w-24 h-1 bg-color30 mx-auto"></div>
            </div>

            {/* Latest Releases Section */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <PlayCircle className="w-8 h-8 text-color30" />
                    <h2 className="text-3xl font-bold">Latest Releases</h2>
                    <div className="h-[2px] bg-color30 flex-grow"></div>
                </div>

                <div className="flex flex-wrap justify-between gap-4 max1000:justify-center max900:gap-8">
                    {visibleTracks.map(renderTrack)}
                </div>

                <ShowMoreButton
                    totalItems={sortedTracks.length}
                    itemsPerPage={config.itemsPerPage.tracks}
                    isShowingAll={showAll.tracks}
                    onToggle={() => toggleShowAll('tracks')}
                    className="mt-8 mx-auto"
                />
            </section>

            {/* Music Videos Section */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <Video className="w-8 h-8 text-color30" />
                    <h2 className="text-3xl font-bold">Music Videos</h2>
                    <div className="h-[2px] bg-color30 flex-grow"></div>
                </div>

                <MediaGrid items={visibleVideos} renderItem={renderVideo} />

                <ShowMoreButton
                    totalItems={sortedVideos.length}
                    itemsPerPage={config.itemsPerPage.videos}
                    isShowingAll={showAll.videos}
                    onToggle={() => toggleShowAll('videos')}
                    className="mt-8 mx-auto"
                />
            </section>

            {/* Live Performances Section */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <Radio className="w-8 h-8 text-color30" />
                    <h2 className="text-3xl font-bold">Live Performances</h2>
                    <div className="h-[2px] bg-color30 flex-grow"></div>
                </div>

                <MediaGrid items={visiblePerformances} renderItem={renderPerformance} />

                <ShowMoreButton
                    totalItems={sortedPerformances.length}
                    itemsPerPage={config.itemsPerPage.performances}
                    isShowingAll={showAll.performances}
                    onToggle={() => toggleShowAll('performances')}
                    className="mt-8 mx-auto"
                />
            </section>
        </div>
    );
}