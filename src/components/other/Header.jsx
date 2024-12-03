import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-medium text-black">Welcome</h1>
        <span className="text-3xl font-semibold text-black"> 👋</span>
      </div>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white py-2 px-6 rounded-lg hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
