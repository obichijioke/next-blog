import React from 'react'

const data = {
    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-party.jpg',
    title:'9 Things I love about Shaving My Head During Quarantine',
    date:'September 15, 2021'
}
const FeaturedSmallItem = () => {
    return (
        <div className='flex w-full'>
            <img src={data.image} alt="" className='w-1/3 rounded h-32 object-cover'/>
            <div className="w-2/3 pl-3">
                <h4 className='text-xl font-medium text-gray-800'>{data.title}</h4>
                <p className='text-gray-500 mt-3 text-sm'>{data.date}</p>
            </div>
        </div>
    )
}

export default FeaturedSmallItem
