
import React from 'react';

export default function ListingComponent({ listings }) {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row flex-wrap my-4">
            {listings.map((listing, index) => {
                return (
                    <div key={index} className="p-4 flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center w-350 h-350 bg-coolGray-100 rounded  shadow-lg">
                            <div className='bg-blueGray-300 w-24 h-20 rounded'></div>
                        </div>
                        <div className='flex justify-center text-white items-center mt-4 mb-6'>
                            {listing.title}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
