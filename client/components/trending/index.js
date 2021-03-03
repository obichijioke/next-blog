import React from 'react'
import TrendingCard from './TrendingCard'

const data = [{title:'The final 6 ‘Game of Thrones’ episodes might feel like a full season',
                date:'July 15, 2021',
                 image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/news-station-400x240.jpg', 
                 category:'LifeStyle'
                },
                {
                    title:'The final 6 ‘Game of Thrones’ episodes might feel like a full season',
                    date:'July 15, 2021',
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/walking-dead-400x240.jpg', 
                    category:'LifeStyle'
                },
                {
                    title:'The final 6 ‘Game of Thrones’ episodes might feel like a full season',
                    date:'July 15, 2021',
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/couple-fashion2-400x240.jpg', 
                    category:'LifeStyle'
                },
                {
                    title:'The final 6 ‘Game of Thrones’ episodes might feel like a full season',
                    date:'July 15, 2021',
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/superman-400x240.jpg', 
                    category:'LifeStyle'
                },
                {
                    title:'The final 6 ‘Game of Thrones’ episodes might feel like a full season',
                    date:'July 15, 2021',
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-400x240.jpg', 
                    category:'LifeStyle'
                },{
                    title:'The final 6 ‘Game of Thrones’ episodes might feel like a full season',
                    date:'July 15, 2021',
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-party-400x240.jpg', 
                    category:'LifeStyle'
                }
                ]

const index = () => {
    return (
        <div className="w-full">
            <div className='container'>
                <h2 className='text-4xl font-bold mt-24 mb-10 text-gray-800'>Trending</h2>
                <div className='flex flex-wrap justify-between'>{data && data.map((item, index)=>(
                    <div className='shadow my-4 rounded-xl overflow-hidden' style={{width:'32%'}} key={index}><TrendingCard data={item}/></div>
                ))}</div>
            
            </div>
        </div>
    )
}

export default index
