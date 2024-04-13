"use client"
import Nav from '@/components/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Contact = () => {
  return (
    <>
        <div>
            <Nav/>
        </div>
        <div className="border p-0.4"></div>
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
        <form>
          <div className="mb-4">
            <Label htmlFor="name" className="block text-gray-200 font-semibold">Name</Label>
            <Input type="text" id="name" name="name" className="mt-1 px-4 py-2 w-full border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-gray-200 font-semibold">Email</Label>
            <Input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <Label htmlFor="message" className="block text-gray-200 font-semibold">Message</Label>
            <textarea id="message" name="message" rows={5} className="mt-1 px-4 py-2 w-full border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">Send Message</Button>
        </form>
      </div>
    </div>
    <div className="border p-0.4"></div>
            <div className="h-[2.5rem] text-gray-400 pt-2 text-center">
            © 2024 EXOR Inc. All rights reserved.
        </div>
    </>
  )
}

export default Contact