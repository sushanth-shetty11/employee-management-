import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 h-screen flex flex-col space-y-6">
     
      <div className="bg-white shadow-md rounded-lg p-5">
        <Header changeUser={props.changeUser} data={props.data} />
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-5">
        <TaskListNumbers data={props.data} />
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-5 flex-grow overflow-auto">
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
