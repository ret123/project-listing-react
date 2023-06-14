import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ListingComponent from '../components/ListingComponent'
import axios from 'axios';

export default function ListingPage() {

    const [listings, setListings] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [filters, setFilters] = useState({
        s: '',
        page: 1
    })
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {

        const fetchListings = async () => {
            try {
                const res = await axios.get(`listings?page=${filters.page}&category=${filters.s}`);
                setListings(filters.page === 1 ? res.data.data : (listings) => [...listings, ...res.data.data]);
                setLastPage(res.data.last_page);
                setErrorMsg('');
            } catch (error) {
                setErrorMsg('Error getting data')
            }
        }
        fetchListings();
    }, [filters])

    const handleLoadMore = () => {
        // if(filters.page === lastPage) return;
        setFilters({
            ...filters,
            page: filters.page + 1
        });
    }

    let button;
    if (filters.page !== lastPage) {
        button = (
            <button onClick={handleLoadMore} className="bg-coolGray-100 hover:bg-blueGray-300 text-coolGray-600  hover:text-coolGray-600 w-176 h-50 py-2 px-4 w-176 h-50 mr-6 mb-6 border border-blue hover:border-transparent rounded uppercase">
                Load More
            </button>
        )
    }
    return (
        <>
            <Navbar setFilters={setFilters} filters={filters} />
            <ListingComponent listings={listings} />
            <div className="flex justify-center items-center">
                {button}
            </div>
        </>
    )
}

