import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-white via-blue-100 to-blue-200 p-7 flex flex-col space-y-6">
     
      <div className="bg-white shadow-md rounded-lg p-5">
        <Header changeUser={props.changeUser} />
      </div>

     
      <div className="bg-white shadow-md rounded-lg p-5">
        <CreateTask />
      </div>

   
      <div className="bg-white shadow-md rounded-lg p-5 flex-grow overflow-auto">
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
