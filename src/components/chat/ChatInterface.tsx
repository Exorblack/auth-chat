// components/ChatInterface.tsx
import React from 'react';

interface Message {
  id: string;
  text: string;
  userId: string;
  userName: string;
}

const messages: Message[] = [
  { id: '1', text: 'Hello there!', userId: '1', userName: 'User123' },
  { id: '2', text: 'Hi!', userId: '2', userName: 'User456' },
];

const ChatInterface: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-blue-500 px-4 py-3 text-white">
        <h1 className="text-xl font-bold">Chat Room</h1>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Individual messages */}
        <div className="flex flex-col space-y-2">
          {messages.map(message => (
            <div key={message.id} className="flex flex-col">
              <p className="text-xs text-gray-400">{message.userName}</p> {/* User name */}
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-white">A</span>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                  <p className="text-gray-800">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Message input field */}
      <div className="p-4 border-t border-gray-200">
        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Type your message..." />
        <button className="mt-2 w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300">Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
