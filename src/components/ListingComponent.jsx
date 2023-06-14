
import React from 'react';

export default function ListingComponent({listings}) {

   
    return (
        <div className="grid grid-cols-3 mt-69 text-sm">
            {listings.map((listing,index) => {
                return (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center w-350 h-350 bg-coolGray-100 rounded  shadow-lg">

                            <div className='w-24 h-20 bg-blueGray-300 rounded'>

                            </div>


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
