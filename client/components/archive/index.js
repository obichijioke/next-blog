import React from 'react'
import ArchiveCard from './ArchiveCard'
import SideBar from '../sidebar'


const data = [
    { 
    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/men-actors-590x354.jpg',
    title:'30 Best Lifestyles Blogs to Follow in 2021',
    author:{image: '/images/3.jpg', name: 'kate Adie'},
    description:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
    date:'September 15, 2021',
    readtime: '6 mins to read'
    },
    { 
        image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones.jpg',
        title:'30 Best Lifestyles Blogs to Follow in 2021',
        author:{image: '/images/3.jpg', name: 'kate Adie'},
        description:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
        date:'September 15, 2021',
        readtime: '6 mins to read'
        },
        { 
            image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-590x354.jpg',
            title:'30 Best Lifestyles Blogs to Follow in 2021',
            author:{image: '/images/3.jpg', name: 'kate Adie'},
            description:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
            date:'September 15, 2021',
            readtime: '6 mins to read'
            },
            { 
                image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-590x354.jpg',
                title:'30 Best Lifestyles Blogs to Follow in 2021',
                author:{image: '/images/3.jpg', name: 'kate Adie'},
                description:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
                date:'September 15, 2021',
                readtime: '6 mins to read'
                },
                { 
                    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-brunette2-590x354.jpg',
                    title:'30 Best Lifestyles Blogs to Follow in 2021',
                    author:{image: '/images/3.jpg', name: 'kate Adie'},
                    description:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
                    date:'September 15, 2021',
                    readtime: '6 mins to read'
                    },
                    { 
                        image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/worker-strike-590x354.jpg',
                        title:'30 Best Lifestyles Blogs to Follow in 2021',
                        author:{image: '/images/3.jpg', name: 'kate Adie'},
                        description:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
                        date:'September 15, 2021',
                        readtime: '6 mins to read'
                        }
]
const index = () => {
    return (
        <div className="container">
            <div className=" flex w-full">
                <div className="w-2/3 pr-6">
                    <ul className="w-full">
                        {data && data.map((item, index)=>(
                        <ArchiveCard data={item} key={index}/>
                    ))}
                    </ul>
                    
                </div>
                <div className="w-1/3 border-gray-300 border rounded-lg">
                    <SideBar/>
                </div>
            </div>
            
        </div>
    )
}

export default index
