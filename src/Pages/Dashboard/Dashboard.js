import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-8">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <h2 className='text-3xl font-bold text-purple-500 my-5'>Welcome To your Dashboard</h2>
            <Outlet></Outlet>   
        </div> 
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 mr-8 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">My Appoinments</Link></li>
            <li><Link to="/dashboard/myreview">My Reviews</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;