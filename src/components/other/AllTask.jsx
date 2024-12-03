import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1f1f1f] p-8 rounded-lg mt-8 shadow-lg">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-white mb-4">Employee Task Overview</h2>
        <div className="grid grid-cols-5 gap-6 text-center bg-gray-800 py-3 px-5 rounded-lg">
          <h3 className="text-xl font-medium text-white">Employee Name</h3>
          <h3 className="text-xl font-medium text-white">New Task</h3>
          <h3 className="text-xl font-medium text-white">Active Task</h3>
          <h3 className="text-xl font-medium text-white">Completed</h3>
          <h3 className="text-xl font-medium text-white">Failed</h3>
        </div>
      </div>

      {userData.map((elem, idx) => (
        <div key={idx} className="grid grid-cols-5 gap-6 items-center bg-gray-700 mb-5 py-4 px-5 rounded-lg border-2 border-gray-600">
          <h2 className="text-xl font-semibold text-white">{elem.firstName}</h2>
          <div className="flex justify-center items-center">
            <h3 className="text-3xl font-bold text-blue-500">{elem.taskCounts.newTask}</h3>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-3xl font-bold text-yellow-400">{elem.taskCounts.active}</h3>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-3xl font-bold text-green-500">{elem.taskCounts.completed}</h3>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-3xl font-bold text-red-600">{elem.taskCounts.failed}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
