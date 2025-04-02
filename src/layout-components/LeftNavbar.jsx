import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {


    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])


    return (
        <div>
            <h2>All categories: {categories.length}</h2>
            <div className="gap-3 flex flex-col py-3">
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>
                            {category.category_name}
                        </NavLink>
                    // <button className="btn" key={category.category_id}>{category.category_name}</button>
                )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;





























// import { useEffect, useState } from "react";


// const LeftNavbar = () => {

//     const [categories, setCategories] = useState([])

//     useEffect( () =>{
//         fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then((res) => res.json())
//         .then((data) => setCategories(data.data.news_category))
//     },[])

   

//     return (
//         <div>
//             <h2>All Category: {categories.length}</h2>
//             <div className="flex flex-col gap-2 py-4">
//                 {
//                     categories.map(category => <button className="btn" key={category.category_id}>{category.category_name}</button>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default LeftNavbar;