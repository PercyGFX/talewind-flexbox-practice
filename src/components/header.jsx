import React from 'react'

export default function Header() {

    return (
        <div className="flex flex-row justify-between py-4 bg-gradient-to-b from-gray-700 to-gray-600">
            <div className="mx-10 my-2"> Logo</div>
            <div className="flex flex-row my-2 mx-5">

                <p className="mx-4 text-white font-medium">Home</p>
                <p className="mx-4 text-white font-medium">About Us</p>
                <p className="mx-4 text-white font-medium">Works</p>
                <p className="mx-4 text-white font-medium">Blog</p>

            </div>
        </div>
    )
}