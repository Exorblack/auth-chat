"use client"
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { Button } from '../ui/button'; 

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="bg-slate-950 p-8 rounded-lg max-w-2xl border border-gray-700"> {/* Enhanced shadow on hover */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 text-center">
              Feel free to contact us with any questions, feedback, or even just
              to say hi! We&apos;re always happy to hear from you.
            </p>
            <form className="space-y-4 w-full px-8 py-6"> 
              <div className="flex items-center text-gray-300">
                <FaUser className="mr-2" />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="block w-full bg-gray-900 text-white border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="mr-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full bg-gray-900 text-white border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center text-gray-300">
                <FaComment className="mr-2" />
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="block w-full bg-gray-900 text-white border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="" variant={'outline'}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
