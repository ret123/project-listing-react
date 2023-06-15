import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Circles } from 'react-loader-spinner'
import Navbar from '../components/Navbar'
import ListingComponent from '../components/ListingComponent'


export default function ListingPage() {

    const [listings, setListings] = useState([]);
    const [filters, setFilters] = useState({
        s: '',
        page: 1
    })
    const [lastPage, setLastPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchListings = async () => {
            const res = await axios.get(`listings?page=${filters.page}&category=${filters.s}`);
            setListings(filters.page === 1 ? res.data.data : (listings) => [...listings, ...res.data.data]);
            setLastPage(res.data.last_page);
            setLoading(false);

        }
        fetchListings();
    }, [filters])

    const handleLoadMore = () => {
        setFilters({
            ...filters,
            page: filters.page + 1
        });
    }

    let button;
    if (filters.page !== lastPage && !loading) {
        button = (
            <button onClick={handleLoadMore} className="bg-coolGray-100 hover:bg-blueGray-300 text-coolGray-600  hover:text-coolGray-600 w-176 h-50 py-2 px-4 w-176 h-50 mr-6 mb-6 border border-blue hover:border-transparent rounded uppercase">
                Load More
            </button>
        )
    }
    if (filters.page !== lastPage && loading) {
        button = (
            <button className="bg-coolGray-100 hover:bg-blueGray-300 text-coolGray-600  hover:text-coolGray-600 w-176 h-50 py-2 px-4 w-176 h-50 mr-6 mb-6 border border-blue hover:border-transparent rounded uppercase">
                Loading..........
            </button>
        )
    }
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Circles
                height="120"
                width="120"
                color="#F3F4F6"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            </div>
        )
    }
    return (
        <div className='container mx-auto'>
            <Navbar setFilters={setFilters} />
            <ListingComponent listings={listings} />
            <div className="flex justify-center items-center">
                {button}
            </div>
        </div>
    )
}

