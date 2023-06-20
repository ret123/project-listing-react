import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Circles } from 'react-loader-spinner'
import { FaAngleUp } from 'react-icons/fa';
import Navbar from '../components/Navbar'
import ListingComponent from '../components/ListingComponent'



export default function ListingPage() {

    const [listings, setListings] = useState([]);

    const [filters, setFilters] = useState({
        s: '',
        page: 1,

    })
    const [lastPage, setLastPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const fetchListings = async () => {
        try {

            const res = await axios.get(`listings?page=${filters.page}&category=${filters.s}`);
            setListings(filters.page === 1 ? res.data.data : (listings) => [...listings, ...res.data.data]);
            setLastPage(res.data.last_page);

        } catch (error) {
            setError(error.message);

        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
        window.history.scrollRestoration = 'manual'
        fetchListings();
    }, [filters])
  
    const handleLoadMore = () => {
        setFilters({
            ...filters,
            page: filters.page + 1,

        });
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    let button;
    button = (
        <button onClick={handleLoadMore} className="bg-coolGray-100 hover:bg-blueGray-300 text-coolGray-600  hover:text-coolGray-600 w-176 h-50 py-2 px-4 mr-6 mb-6 border border-blue hover:border-transparent rounded uppercase">
           Load more 
        </button>
    )

    if (error) {
        return (
            <div className='container mx-auto'>
                <div className="flex justify-center items-center h-screen">
                    <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Opps Something Went Wrong!
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>{error}. Try Again!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (loading) {
        return (
            <div className='container mx-auto'>
                <Navbar setFilters={setFilters} setLoading={setLoading} setError={setError} />
                <div className="flex justify-center items-center h-screen">
                    <Circles
                        height="120"
                        width="120"
                        color="#F3F4F6"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto w-full">

            <Navbar setFilters={setFilters} setLoading={setLoading} setError={setError} />
            <ListingComponent listings={listings} />
            <div className="flex justify-center items-center">
                {filters.page !== lastPage  && listings.length > 0 ? button : ''}
            </div>
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    )
}

