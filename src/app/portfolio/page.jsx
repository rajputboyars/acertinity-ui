import React from 'react'
import { FocusCardsDemo } from '@/components/FocusCardsDemo';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { PORTFOLIO_NAVLINKS, SHORT_VIDEOS_CARD } from "@/constants/global.constant";
import { LONG_VIDEOS_CARD } from "@/constants/global.constant";
import { PODCASTS_CARD } from "@/constants/global.constant";
import { VSLS_THUMBNAIL_CARD } from "@/constants/global.constant";

const Portfolio = () => {
    return (
        <div className='bg-black text-white'>
            <FloatingNav navItems={PORTFOLIO_NAVLINKS} />
            <div className='text-center'>
                <p className='text-5xl py-10 font-bold'>Portfolio</p>
                <div id='short-videos' className=''>
                    <p className='text-5xl py-10 font-bold'>Short Videos</p>
                    <FocusCardsDemo data={SHORT_VIDEOS_CARD} />
                </div>
                <div id='long-videos' className=''>
                    <p className='text-5xl py-10 font-bold'>Long Videos</p>
                    <FocusCardsDemo  data={LONG_VIDEOS_CARD} />
                </div>
                <div id='podcasts' className=''>
                    <p className='text-5xl py-10 font-bold'>Podcasts</p>
                    <FocusCardsDemo data={PODCASTS_CARD} />
                </div>
                <div id='vsls-thumbnail' className=''>
                    <p className='text-5xl py-10 font-bold'>VSLs Thumbnail</p>
                    <FocusCardsDemo data={VSLS_THUMBNAIL_CARD} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
