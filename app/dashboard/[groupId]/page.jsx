import React from 'react'

const page   = () => {
    const groupMembers = [
      'John Doe',
      'Alice Smith',
      'Bob Johnson',
      'Eva Davis',
      'Michael Wilson',
    ];
  
    return (
      <div className="rounded-md shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Group Members</h2>
        <ul>
          {groupMembers.map((member, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default page
