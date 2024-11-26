import React from 'react'

const SimpleCard = () => {
    return (
        <div className='flex flex-col rounded-xl gap-8 border p-10'>
            <div className=''>iframe</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
            <div className='flex flex-row'>
                <div className='flex justify-center items-center'>
                    <img src="" alt="" />
                </div>
                <div className='flex flex-col'>
                    <p>name</p>
                    <p>position</p>
                </div>
            </div>
        </div>
    )
}

export default SimpleCard
