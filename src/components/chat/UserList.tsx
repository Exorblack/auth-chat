// components/UserList.tsx
import React from 'react';

interface User {
  id: string;
  name: string;
}

const users: User[] = [
  { id: '1', name: 'User123' },
  { id: '2', name: 'User456' },
  { id: '3', name: 'User789' },
];

const UserList: React.FC = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold text-white mb-4">Users Online</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-white">B</span>
            </div>
            <p className="font-semibold text-white">{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
