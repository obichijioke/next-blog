import React from 'react'
import RecentCard from './RecentCard'

const data = [
    { 
    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/men-actors-590x354.jpg',
    title:'30 Best Lifestyles Blogs to Follow in 2021',
    author:{image: '/images/3.jpg', name: 'kate Adie'},
    date:'September 15, 2021',
    readtime: '6 mins to read'
    },
    { 
        image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones.jpg',
        title:'30 Best Lifestyles Blogs to Follow in 2021',
        author:{image: '/images/3.jpg', name: 'kate Adie'},
        date:'September 15, 2021',
        readtime: '6 mins to read'
        },
        { 
            image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-590x354.jpg',
            title:'30 Best Lifestyles Blogs to Follow in 2021',
            author:{image: '/images/3.jpg', name: 'kate Adie'},
            date:'September 15, 2021',
            readtime: '6 mins to read'
            },
            { 
                image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-590x354.jpg',
                title:'30 Best Lifestyles Blogs to Follow in 2021',
                author:{image: '/images/3.jpg', name: 'kate Adie'},
                date:'September 15, 2021',
                readtime: '6 mins to read'
                },
                { 
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-brunette2-590x354.jpg',
                    title:'30 Best Lifestyles Blogs to Follow in 2021',
                    author:{image: '/images/3.jpg', name: 'kate Adie'},
                    date:'September 15, 2021',
                    readtime: '6 mins to read'
                    },
                    { 
                        image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/worker-strike-590x354.jpg',
                        title:'30 Best Lifestyles Blogs to Follow in 2021',
                        author:{image: '/images/3.jpg', name: 'kate Adie'},
                        date:'September 15, 2021',
                        readtime: '6 mins to read'
                        }
]
   

const index = () => {
    return (
        <div className="container">
        <div className="mt-16">
               <h3 className="text-4xl font-bold mb-8">Recent Posts</h3> 
        </div>
        <div className="flex flex-wrap justify-between">
            {
                data && data.map((item, index)=>(
                    <div className="my-4" style={{width:'49%'}} key={index}><RecentCard data={item}/></div>
                ))
            }
            
        </div>
        </div>
    )
}

export default index
