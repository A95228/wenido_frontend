import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../../../../redux/actions/categoryActions";

function CategoryItem({title}) {
    return (
        <div className="hover:text-white hover:font-bold border-b py-1 hover:bg-yellow-400">
            <Link to={`/`} className="h-8 flex justify-center items-center" activeClassName="current">{title}</Link>
        </div>

    )
}

function Categories(props) {
    const categories = useSelector(state => state.category.categories);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories)
    }, [])
    const [open, setOpen] = React.useState(null)
    return (
        <div>
            {open && <div className="absolute top-0 left-0 h-full w-full" onClick={() => setOpen(false)}/>}
            <div className="bg-yellow-400 relative flex h-12 shadow-md rounded-xs hover:font-bold cursor-pointer justify-start z-20 items-center pl-8"
                 onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faList}/> <p className="ml-2">All Categories</p>
                {
                    open &&
                    <div className="absolute mt-12 bg-gray-100 w-full top-0 left-0 shadow rounded-sm p-2">
                        {
                            categories.map((category, key) => {
                                return <CategoryItem title={category.title}/>
                            })
                        }
                    </div>
                }
            </div>

        </div>

    );
}

export default Categories;