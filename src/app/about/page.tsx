import AboutPage from '@/components/about/about'
import Nav from '@/components/nav'
import React from 'react'

const about = () => {
  return (
    <div>
        <div>
            <Nav/>
        </div>
        <div className="border p-0.4"></div>
        <div>
            <AboutPage/>
        </div>
        <div className="border p-0.4"></div>
        <div className="h-[2.5rem] text-gray-400 pt-2 text-center">
            © 2024 EXOR Inc. All rights reserved.
        </div>
    </div>
  )
}

export default about