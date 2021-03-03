import React from 'react'
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';

const RightSide = () => {
    return (
        <div className="flex">
            <div className="flex flex-col justify-center">
                <Link href="/login">
                    <a>
                       <button className="rounded bg-purple-600 px-4 py-2 text-white text-xl">LOGIN</button>  
                    </a>
                   
                </Link>
            
            </div>
            
      <ProfileMenu/>
        </div>
    )
}

export default RightSide
