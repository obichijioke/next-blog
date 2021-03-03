import React from 'react'


const TrendingCard = ({data}) => {
    const {image, title, category, date} = data;
    return (
        <div className="w-full">
            <div className="relative">
               <img src={image} alt="" className="w-full"/> 
               <p className="p-2 text-white bg-purple-600 rounded absolute left-4 top-4">{category}</p>
            </div>
            <div className="p-8">
                <p className="text-gray-400 text-sm">{date}</p>
                <h4 className='text-lg font-medium text-gray-800'>{title}</h4>
            </div>

        </div>
    )
}

export default TrendingCard
