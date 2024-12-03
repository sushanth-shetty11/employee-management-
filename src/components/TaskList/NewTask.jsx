import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-700 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-green-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm text-gray-300'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-400'>{data.taskDescription}</p>
      <div className='mt-6'>
        <button className='w-full bg-blue-500 hover:bg-blue-600 rounded font-medium py-1 px-2 text-xs text-white'>
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
