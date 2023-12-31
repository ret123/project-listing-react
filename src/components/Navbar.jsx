import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Navbar(props) {

    const [categories, setCategories] = useState([]);
    const [active, SetActive] = useState(1);
      
    const fetchCategories = async () => {
        try {
          
            const res = await axios.get('categories');
            setCategories(res.data);
            
        } catch(error) {
            props.setError(error.message)
        } finally {
            props.setLoading(false);
        }
       
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const handleClick = (s) => {
       props.setLoading(true);
        if(s === 1) {
            props.setFilters({
                s: '',
                page: 1,
              
            })
        } else {
            props.setFilters({
                s,
                page: 1,
               
            })
        }
        SetActive(s);
        
    }

    return (
        // margin-top: is 63px according to wireframe. So applied custom tailwind size of 63px
        // <nav className='grid grid-cols-2 md:grid-cols-6 gap-2 auto-cols-auto px-8 mt-63'>
        <nav className='flex flex-col md:flex-row justify-center items-center mt-63 px-8 gap-4  md:gap-8 w-full'>
               {categories.map((cat) => {
                    return (
                        <button 
                        onClick={() => handleClick(cat.id)}
                        key={cat.id} 
                        className={`font-title bg-transparent hover:bg-blueGray-300 w-full sm:w-1/2  md:w-1/6 text-blueGray-300 hover:text-coolGray-600 py-2 px-2 mb-2 border border-blue hover:border-transparent rounded uppercase ${active === cat.id ? "text-gray-600" : " "}`}
                        style={{backgroundColor: active === cat.id ? '#cbd5e1' : '' }}    
                        >
                            {cat.name}
                        </button>
                    );
                })}
           
        </nav>
    )
}
