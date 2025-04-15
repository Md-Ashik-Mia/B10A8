import React from "react";
import Banner from "../../assets/banner.jpg";
import Explore from "../Explore/Explore";
import { Link } from "react-router-dom";

function Home() {

document.title = "Gadget Heaven | Home";








  return (
    <section className="w-11/12 mx-auto">
      <div className="hero  bg-[#9538E2] rounded-b-3xl">
        <div className="hero-content flex-col text-center">
          <div className="mt-24 mb-[-9rem]">
            <h1 className="text-5xl font-bold text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            
            <Link to="/dashboard">
              <button className="btn bg-white rounded-xl text-purple-500">
                Shopnow
              </button>
            </Link>
          </div>
          <div className="w-9/12 outline-8 outline-white border-white  border-[16px] relative top-72 border-opacity-15 rounded-xl overflow-hidden ">
            <img src={Banner} alt="" />
          </div>
        </div>
      </div>
      <Explore></Explore>
    </section>

    // <div className=' w-11/12 mx-auto'>
    //     <h1 className='text-3xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
    //     <p className='text-xl'>Welcome to the home page!</p>
    // </div>
  );
}

export default Home;
