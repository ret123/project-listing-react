import React from 'react';

export default function ListingComponent({ listings }) {
    return (
        // mt-69 is set for margin-top of 69px from categories button as per wireframe and card height is set to 350px on large screen according to wireframe and 240px for mobile view
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-12 md:mt-69">
            {listings.map((listing, index) => {
                return (
                    <div key={index} className="p-4 flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center w-full h-60 md:card-h bg-coolGray-100 rounded shadow-lg">
                        <div className='bg-blueGray-300 w-24 h-20 rounded'></div>
                        </div>
                        
                        <div className='flex flex-1 justify-center items-center font-title text-xl  text-white  mt-4 mb-6'>
                            {listing.title}
                        </div>
                    </div>
                    
                );
            })}
        </div>
    )
    
}
