import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  const [day,setDay] =useState('');
  const [month,setMonth] =useState('');
  const [year,setYear] =useState('');
  const [age,setAge] =useState({days :'', months:'', years:''});

    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(year, month - 1, day);
      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();
  
      if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
  
      if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
      }
  
      setAge({ days: ageDays, months: ageMonths, years: ageYears });
    };
  
    useEffect(() => {
      if (day && month && year) {
        calculateAge();
      }
    }, [day, month, year]);
  
return (
  <>
  <section className="w-screen h-auto ">
    <div className="flex  justify-center  w-full h-auto bg-slate-100 ">
    <div className=" flex w-96 flex-col  bg-white border-slate-300 rounded-r-3xl border-2">
      <div className="flex justify-center ">
        <div className=" px-5 flex flex-col justify-center ">
          <h1 className="flex text-center justify-center px-6 text-indigo-600 text-xl font-bold">Day</h1>
          <input placeholder="DD" type="search" value={day} onChange={(e) => setDay(e.target.value)} className="w-20 h-8 text-center border-slate-300 rounded-lg border-2" ></input>
        </div>
        <div className=" ">
          <h1 className="flex text-center justify-center px-6 text-indigo-600 text-xl font-bold">Month</h1>
          <input placeholder="MM"  type="search" value={month} onChange={(e) => setMonth(e.target.value)} className="w-20 h-8 text-center border-slate-300 rounded-lg border-2" ></input>
        </div>
        <div className=" ">
          <h1 className="flex text-cente justify-center px-6 text-indigo-600 text-xl font-bold">Year</h1>
          <input placeholder="YYYY"  type="search" value={year} onChange={(e) => setYear(e.target.value)} className="w-20 h-8 text-center border-slate-300 rounded-lg border-2" ></input>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-10 ">
      <hr className="w-full h-8  "></hr>
        <button className="bg-indigo-600 absolute -mt-7 text-white w-12 h-12 rounded-full flex flex-col items-center  justify-center "><svg class="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
</svg>
</button>
      </div >
      <div className=" px-3 font-serif">
      <div className="flex"> <h1 className="text-indigo-600 text-5xl flex justify-center text-center font-bold">{age.days}</h1> <h1 className="text-4xl font-bold">Day</h1>  
      </div>
      <div className="flex"> <h1 className="text-indigo-600 text-5xl flex justify-center text-center font-bold">{age.months}</h1> <h1 className="text-4xl font-bold">Months</h1>  
      </div>
      <div className="flex"> <h1 className="text-indigo-600 text-5xl flex justify-center text-center font-bold">{age.years}</h1> <h1 className="text-4xl font-bold">Year</h1>  
      </div>
      </div>
    </div>
    </div>
  </section>
  </>
);
}

export default App;
