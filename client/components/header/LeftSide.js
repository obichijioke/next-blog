import React from 'react'
import Link from 'next/link'
import MenuDrawer from './MenuDrawer'

const LeftSide = () => {
    

    const navlinks = [{name: 'Home', link: '/home'}, {name: 'About', link: '/about'}, {name: 'Blog', link: '/blog'},{name: 'Contact', link: '/contact'} ]
    
    return (<div className="flex flex-col justify-center"><div className="flex">
                
                <div className='md:hidden'><MenuDrawer navs={navlinks}/></div>
                <div className='mr-4 bg-purple-700 p-2 rounded '><Link href='/'><a><span className="text-gray-100">LOGO</span></a></Link></div>
                
                <div className='flex-col justify-center hidden md:flex'><ul className='flex'>
                    {navlinks && navlinks.map((item)=>(<li className="mx-4 text-xl font-medium text-purple-700" key={item.name}><Link href={item.link}><a>{item.name}</a></Link></li>))}
                </ul></div>
                
        </div></div>
        
    )
}

export default LeftSide
