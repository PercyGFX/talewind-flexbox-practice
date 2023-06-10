import React from "react"

export default function AboutUs () {

    return (
        <div className="bg-white flex flex-row py-24 px-24">
            <div className="w-1/2 mx-2">
                <img width="456" height="346" src="./images/specs.png" />
            </div>

            <div className="w-1/2 mx-2 ">
                <h1 className="text-2xl mb-2.5">About Us</h1>
                <hr className="border-0 bg-orange-500 h-1 mb-2.5 "/>
                <p className="mb-2.5"> My passion for building websites started since 2013 and since then i have helped companies around the world build amazing websites and products that create real value for the business and users. </p>

                 <p className="mb-2.5">   I enjoy solving problems with clean scalable solutions and I also have a genuine passion for inspiring design.</p>

                <p>   I am a fullstack developer focusing on core frontend and backend technologies which include HTML, CSS, Javascript, React and other core languages
                </p>
            </div>
        </div>
    )
}