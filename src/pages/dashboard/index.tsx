import React from 'react'
import medal from '../../../public/images/medal.svg';
import average from '../../../public/images/average.svg';
import exam from '../../../public/images/exam.svg';
import speed from '../../../public/images/speed.svg';
import accuracy from '../../../public/images/accuracy.svg';
import resultoverview from '../../../public/images/resultoverview.svg'


const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6 font-sans ">
       <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl text-light">
          Welcome back, <span className="text-3xl  font-bold">John Smith</span>
          <p className="text-sm text-gray-500">Here you can see your overall rank and activities</p>
        </h1>
      
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-4 gap-4 mb-8  bg-gradient-to-br from-[#ffe9ea] to-[#c4ffed] p-6 rounded-xl shadow-md">
         
        <div className="relative p-4  rounded-xl gap-4 shadow w-full max-w-sm  bg-white  rounded-lg " >

         <img src={medal} alt="Medal Icon" className=" absolute top-0 right-5 w-20 h-20 -mt-0 -mr-0" />
          <p className="text-gray-600 mb-3 ">Rank</p>
          <h2 className="text-3xl font-bold ">
            23 <span className="text-gray-500 text-sm">/ 50</span>
                  <p className="text-sm text-gray-500 mt-2 "> Compared to all the attendees who attend the same exams as you.</p>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-4 shadow w-full flex rounded-xl ">
    
      
      <div className=" flex items-center bg-green-100 rounded-xl p-2 gap-3 ">
         <img src={average} alt="Average Icon" className="  w-10 h-10 " />
        <div>
          <p className="text-gray-600 text-sm">Avg.Score</p>
          <p className="text-lg font-semibold">78%</p>
          
        </div>
      </div>

      {/* Exams Attended */}
      <div className=" flex items-center bg-pink-100 rounded-xl p-2 gap-3">
        <img src={exam} alt="Exam" className=" w-10 h-10" />
        <div>
          <p className="text-gray-600 text-sm">Exams attended</p>
          <p className="text-lg font-semibold">12</p>
        </div>
      </div>

      {/* Speed */}
      <div className="flex items-center bg-blue-100 rounded-xl p-2 gap-3">
         <img src={speed} alt="Speed" className="  w-10 h-10 " />
        <div>
          <p className="text-gray-600 text-sm">Speed</p>
          <p className="text-lg font-semibold">2Q/min</p>
        </div>
      </div>

      {/* Accuracy */}
      <div className="flex items-center bg-pink-100 rounded-xl p-2 gap-3">
        <img src={accuracy} alt="Accuracy" className="  w-10 h-10" />
        <div>
          <p className="text-gray-600 text-sm">Accuracy</p>
          <p className="text-lg font-semibold">75%</p>
        </div>
      </div>
    </div>
      
        <div className=" bg-white p-4 rounded-xl shadow  flex    ">
        <p className="text-bold flex ">Exam Result Overview</p> 
      <div className="  flex  items-center "> 
           <p className="text-sm font-semibold  absolute items-center mt-14 ml-10">
    12<br />Exams
  </p>
         </div>
       <img src={resultoverview} alt="Resultoverview" className="relative mt-8 mr-16 w-30 h-30 " />
      
          
  

          
           <div className="space-y-3  ml-8 mt-8">
        <div className="flex items-center gap-2  ">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <p className="text-sm text-gray-700">GOOD</p>
        </div>
        <div className="flex items-center gap-2 ">
          <span className="w-3 h-3 rounded-full bg-blue-400"></span>
          <p className="text-sm text-gray-700">AVERAGE</p>
        </div>
        <div className="flex items-center gap-2 ">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <p className="text-sm text-gray-700">BAD</p>
        </div>
      </div>
      </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" >
          <div className="bg-white rounded-xl p-6 shadow w-full max-w-md">
  <h3 className="text-md font-semibold text-gray-800 mb-1">Attended Exams</h3>
  <p className="text-3xl font-bold text-gray-900">23</p>
  <p className="text-sm text-gray-500 mb-4">exams attended</p>
   

  
</div>

     <div className="bg-white rounded-xl p-6 shadow w-full max-w-md">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Attended Exams Results</h3>

  <div className="space-y-3">
    <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md text-sm text-gray-700 shadow-sm">
      <span>Group 4 Exam - Quick Test - 4</span>
      <span className="text-blue-600 font-semibold">34/50</span>
    </div>

    <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md text-sm text-gray-700 shadow-sm">
      <span>Mock Test - 3</span>
      <span className="text-green-600 font-semibold">45/50</span>
    </div>

    <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md text-sm text-gray-700 shadow-sm">
      <span>Quick Test - 23</span>
      <span className="text-red-500 font-semibold">16/50</span>
   </div>

    <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md text-sm text-gray-700 shadow-sm">
      <span>GrNameoup 1 - Exam - Mock test</span>
      <span className="text-blue-600 font-semibold">34/50</span>
    </div>

    <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md text-sm text-gray-700 shadow-sm">
      <span>Group 1 - Exam - Mock test</span>
      <span className="text-blue-600 font-semibold">34/50</span>
    </div>
  </div>
</div>
    
       <div className="bg-white p-4 rounded-xl shadow">
        <h3 className=" text-lg font-semibold text-gray-800 mb-4">Monthly Based Answer Accuracy</h3>
        <p className="text-2xl font-bold text-green-600">78%</p>
        <p className="text-sm text-gray-500">Current Accuracy</p>
         
        </div>
      
  </section>   

</div>
    
  );
};

export default Dashboard;
  
