import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Navbar(props) {

    const [categories, setCategories] = useState([]);
    const [active, SetActive] = useState('All');


    const fetchCategories = async () => {
        const res = await axios.get('categories');
        setCategories(res.data);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const handleClick = (s) => {
        props.setFilters({
            s,
            page: 1

        })
        SetActive(s);
    }

    const handleAll = () => {
        props.setFilters({
            s: '',
            page: 1
        })
        SetActive('All');
    }

    return (
        <nav className="mt-16 px-4 py-4">
            <div className="flex flex-col items-center md:flex-row mt-6 justify-center text-sm lg:flex-grow">

                <button onClick={handleAll} className={`bg-transparent hover:bg-blueGray-300 text-blueGray-300 hover:text-coolGray-600 py-2 px-4 mr-6 mb-2 w-176 h-50 border border-blue hover:border-transparent rounded uppercase ${active === 'All' ? "bg-slate-300 text-gray-600" : " "}`}>
                    All
                </button>
                {categories.map((cat) => {
                    return (
                        <button onClick={() => handleClick(cat.id)} key={cat.id} className={`bg-transparent hover:bg-blueGray-300  text-blueGray-300 hover:text-coolGray-600 py-2 px-4 mr-6  mb-2 w-176 h-50 border border-blue hover:border-transparent rounded uppercase ${active === cat.id ? "bg-slate-300 text-gray-600" : " "}`}
                        >
                            {cat.name}
                        </button>
                    );
                })}
            </div>
        </nav>
    )
}
