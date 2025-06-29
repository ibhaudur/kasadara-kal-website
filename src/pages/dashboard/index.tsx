import React from 'react'
import medal from '../../../public/images/medal.svg';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6 font-sans ">
       <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl text-light">
          Welcome back, <span className="text-3xl  font-bold">John Smith</span>
          <p className="text-sm text-gray-500">Here you can see your overall rank and activities</p>
        </h1>
      
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
         
        <div className="relative p-6 rounded-xl shadow w-full max-w-sm" >

         <img src={medal} alt="Medal Icon" className=" absolute top-0 right-5 w-20 h-20 -mt-0 -mr-0" />
          <p className="text-gray-600 mb-3 ">Rank</p>
          <h2 className="text-3xl font-bold ">
            23 <span className="text-gray-500 text-sm">/ 50</span>
                  <p className="text-sm text-gray-500 mt-2 "> Compared to all the attendees who attend the same exams as you.</p>
          </h2>
        </div>
         </section>
    </div>
  );
};

export default Dashboard;
  
