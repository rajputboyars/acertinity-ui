import { ParallaxScrollDemo } from '@/components/ParallaxScrollDemo'
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import React from 'react'

const navItems = [
    {
        name: "Home",
        link: "/#home",
    },
    {
        name: "Short Videos",
        link: "/services#short-videos",
    },
    {
        name: "Long Videos",
        link: "/services#long-videos",
    },
    {
        name: "Podcasts",
        link: "/services#podcasts",
    },
    {
        name: "VSLs Thumbnail",
        link: "/services#vsls-thumbnail",
    },
];


const images = [
    "/images/image1.webp",
    "/images/image1.webp",
    "/images/image1.webp",
    "/images/image1.webp",
    "/images/image1.webp",
    "/images/image1.webp",
    "/images/image1.webp",
    "/images/image1.webp",

];

const Services = () => {
    return (
        <div className='bg-black text-white'>
            <FloatingNav navItems={navItems} />
            <div className='text-center'>
                <p className='text-5xl py-10 font-bold'>SERVICES</p>
                <div id='short-videos' className=''>
                    <p className='text-5xl py-10 font-bold'>Short Videos</p>
                    <ParallaxScrollDemo data={images} />
                </div>
                <div id='long-videos' className=''>
                    <p className='text-5xl py-10 font-bold'>Long Videos</p>
                    <ParallaxScrollDemo data={images} />
                </div>
                <div id='podcasts' className=''>
                    <p className='text-5xl py-10 font-bold'>Podcasts</p>
                    <ParallaxScrollDemo data={images} />
                </div>
                <div id='vsls-thumbnail' className=''>
                    <p className='text-5xl py-10 font-bold'>VSLs Thumbnail</p>
                    <ParallaxScrollDemo data={images} />
                </div>
            </div>
        </div>
    )
}

export default Services
