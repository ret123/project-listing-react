import React from 'react';

export default function ListingComponent({ listings }) {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row flex-wrap">
            {listings.map((listing, index) => {
                return (
                    <div key={index} className="px-4 md:mt-8 md:px-8 flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center w-350 h-350 bg-coolGray-100 rounded  shadow-lg">
                            <div className='bg-blueGray-300 w-24 h-20 rounded '></div>
                        </div>
                        <div className='flex justify-center font-title font-normal text-white text-2xl items-center mt-4 mb-6'>
                            {listing.title}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
