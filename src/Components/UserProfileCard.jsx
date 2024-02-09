import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      {user && (
        <>
          <div className=' flex gap-2 border border-gay-900'>
            <img className="w-44 h-44 " src={user.picture.large} alt="User" />
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-gray-700">{user.location.city}, {user.location.country}</p>
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default UserProfileCard;
