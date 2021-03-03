import React from 'react'

const RecentCard = ({data}) => {
    const {image, title, date, author, readtime} = data;
    return (
        <div className="w-full shadow-md rounded-xl overflow-hidden">
            <div className="relative">
               <img src={image} alt="" className="w-full"/> 
               <div className="p-2 absolute left-4 top-4"></div>
            </div>
            <div className="p-8">
                <p className="text-gray-400 text-sm">{date}</p>
                <h4 className='text-2xl font-medium text-gray-800'>{title}</h4>
                <div className='mt-8 flex'>
                    <div className='flex'>
                        <img src={author.image} alt='' className='w-8 h-8 rounded-full'/>
                        <p className='text-gray-400 ml-2 self-center text-sm'>{author.name}</p>
                    </div>
                    <p className='text-gray-400 ml-6 self-center text-sm'>{readtime}</p>
                </div>
            </div>

        </div>
    )
}

export default RecentCard
