import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function Statistics() {

  useEffect(() => {
    document.title = "Gadget Heaven | Statistics";
  }, []);
  const [statisTicsData, setStatisTicsData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) =>setStatisTicsData(data)) ; 

  },[])

  return (
    <div>
      <section className="w-11/12 mx-auto">
        <div className="hero  bg-[#9538E2] rounded-3xl">
          <div className="hero-content flex-col text-center">
            <div className="mt-24">
              <h1 className="text-5xl font-bold text-white">Statistics</h1>
              <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mt-3">Statistics</h1>

       
          <ResponsiveContainer width="100%" height={300}>
          <BarChart  data={statisTicsData}>
            <XAxis dataKey="name"  />
             <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Bar
              dataKey="price"
              barSize={30}
              fill="#8884d8"
            
            />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
