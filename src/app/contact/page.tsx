"use client"
import  ContactUs  from '@/components/contact/ContactForm'
import Nav from '@/components/nav'
import React from 'react'

const Contact = () => {
  return (
    <>
        <div>
            <Nav/>
        </div>
        <div className="border p-0.4"></div>
        <ContactUs/>
    <div className="border p-0.4"></div>
            <div className="h-[2.5rem] text-gray-400 pt-2 text-center">
            © 2024 EXOR Inc. All rights reserved.
        </div>
    </>
  )
}

export default Contact