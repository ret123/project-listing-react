import React from 'react';

export default function ListingComponent({ listings }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 mt-12 md:mt-69">
            {listings.map((listing, index) => {
                return (
                    <div key={index} className='flex flex-col '>
                        <div className="square">
                            <div className="content">
                                <img src="images/pic1.jpg" className='w-full h-full' alt="" />
                            </div>

                        </div>
                        <div className='font-title text-md md:text-xl text-center text-white mt-4 mb-6'>
                            {listing.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )

}
