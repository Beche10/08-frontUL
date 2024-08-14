import React from "react";

export const Profile = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <h1 className="text-xl text-gray-100">Profile</h1>
      <hr className="my-8 border-gray-500" />
      <form>
        <div className="flex items-center">
          
          <div className="w-1/4">
            <p>Avatar</p>
          </div>
          <div className="flex-1">
            <label> avatar </label>
            <img src="/logoHD.jpg" alt="" />
          </div>
        
        </div>
      </form>
    </div>
  );
};
