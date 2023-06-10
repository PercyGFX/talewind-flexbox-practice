import React from "react"

export default function Hero(){
    return (
        <div className="mx-auto border-blue-100 my-16 xl:w-5/12 px-3">
           <h1 className="text-center font-nunito font-semibold text-3xl mb-3.5">Make Your Website Way <span className="text-orange-400">Faster!</span> </h1>
            <p className="text-md text-center mb-2.5">Hello there, your website is slow. And each second it takes to load your website loses you 60% more customers. We make your website FAST! Request a free analysis below.</p>

            <div className="bg-white py-3 px-2">
                <div className="flex flex-row justify-around">

                    <div className="flex flex-col justify-evenly">
                        <input placeholder="Name" className="bg-gray-200 rounded-sm my-2 py-1 focus:outline-none p-3"/>
                        <input placeholder="Name of business" className="bg-gray-200 rounded-sm my-2 py-1 focus:outline-none p-3"/>
                    </div>

                    <div className="flex flex-col justify-evenly">
                        <input placeholder="Email" className="bg-gray-200 rounded-sm my-2 py-1 focus:outline-none p-3"/>
                        <input placeholder="Website URL" className="bg-gray-200 rounded-sm my-2 py-1 focus:outline-none p-3"/>
                    </div>


                </div>
                <div className="text-center mt-3">
                <button className="bg-amber-400 rounded-md py-2 px-10 text-white">Analyze</button>
                </div>
            </div>
        </div>
    )
}