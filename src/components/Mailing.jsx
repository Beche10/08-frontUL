import React from "react";

export const Mailing = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 md:-mt-4">
        <h1 className="text-3xl text-gray-200">Mailing</h1>
      </div>

      <div className="bg-secondary-100 p-24 rounded-lg">
        <div className="mb-3">
        <h1>Emails</h1>
        <input type="text" />
        </div>

        <div>
        <button className="bg-green-color text-black font-bold py-3 px-2 rounded-md"> Send Emails </button>
        </div>

      
      </div>
    </div>
  );
};
