import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Navbar(props) {

    const [categories, setCategories] = useState([]);
    const [active, SetActive] = useState(0);

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
        SetActive(0);
    }

    return (
        <nav className="container mt-16 px-4 md:px-4 py-4">
            <div className="flex flex-col items-center md:flex-row justify-between text-sm lg:flex-grow">

                <button 
                    onClick={handleAll} 
                    className={`font-title bg-transparent hover:bg-blueGray-300 text-blueGray-300 hover:text-coolGray-600 py-2 px-4 mr-6 ml-4 mb-2 w-176 h-50 border border-blue hover:border-transparent rounded uppercase ${active === 0 ? "text-gray-600" : " "}`}
                    style={{backgroundColor: active === 0 ? '#cbd5e1' : '' }}    
                >
                    All
                </button>
                {categories.map((cat) => {
                    return (
                        <button 
                        onClick={() => handleClick(cat.id)}
                        key={cat.id} 
                        className={`font-title bg-transparent hover:bg-blueGray-300  text-blueGray-300 hover:text-coolGray-600 py-2 px-4 mr-6  mb-2 w-176 h-50 border border-blue hover:border-transparent rounded uppercase ${active === cat.id ? "text-gray-600" : " "}`}
                        style={{backgroundColor: active === cat.id ? '#cbd5e1' : '' }}    
                        >
                            {cat.name}
                        </button>
                    );
                })}
            </div>
        </nav>
    )
}
