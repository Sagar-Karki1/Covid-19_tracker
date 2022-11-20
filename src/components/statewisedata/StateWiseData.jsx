import React, { useEffect, useState } from "react";

const StateWiseData = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-sm mx-auto">
        <div className="main-heading">
          <h2 className="text-center text-green-600 font-bold text-2xl my-2">
            India Covid-19 Tracker Dashboard
          </h2>
        </div>
        <div className="Table-container flex justify-center">
          <table className="w-9/12 table-auto border-collapse">
            <thead>
              <tr>
                <th className="bg-zinc-900 text-white">State</th>
                <th className="bg-zinc-900 text-white">Confirmed</th>
                <th className="bg-zinc-900 text-white">Recovered</th>
                <th className="bg-zinc-900 text-white">Deaths</th>
                <th className="bg-zinc-900 text-white">Active</th>
                <th className="bg-zinc-900 text-white">Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement, index) => {
                return (
                  <tr key={index} className="odd:bg-white even:bg-slate-200">
                    <td className="border border-slate-300 text-center hover:bg-green-700 hover:text-white ">
                      {curElement.state}
                    </td>
                    <td className="border border-slate-300 text-center hover:bg-green-700 hover:text-white">
                      {curElement.confirmed}
                    </td>
                    <td className="border border-slate-300 text-center hover:bg-green-700 hover:text-white">
                      {curElement.recovered}
                    </td>
                    <td className="border border-slate-300 text-center hover:bg-red-500 hover:text-white">
                      {curElement.deaths}
                    </td>
                    <td className="border border-slate-300 text-center hover:bg-green-700 hover:text-white">
                      {curElement.active}
                    </td>
                    <td className="border border-slate-300 text-center hover:bg-green-700 hover:text-white">
                      {curElement.lastupdatedtime}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWiseData;
