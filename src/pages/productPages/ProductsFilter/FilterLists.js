import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../../redux/actions/categoryActions";
import {Checkbox} from "@material-ui/core";
import FilterCateItem from "./components/FilterCateItem";
import {fetchProducts} from "../../../redux/actions/productActions";
function FilterLists({history, location}) {
    const categories = useSelector(state => state.category.categories);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories)
    }, [])


    return (
        <div className="h-screen border rounded">
                <p className="font-bold text-sm pl-2 py-2 border-b ">Filter By : </p>
                <div className="h-screen overflow-y-auto">
                    <div className="px-2 pb-3 border-b">
                        <p className="text-gray-800 py-2 text-sm pl-1 font-bold">Name : </p>
                        <div className="relative">
                            <div className="absolute top-0 left-0 items-center">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-2 ml-1">
                                    <path fill-rule="evenodd"
                                          d="M20.2 18.1l-1.4 1.3-5.5-5.2 1.4-1.3 5.5 5.2zM7.5 12c-2.7 0-4.9-2.1-4.9-4.6s2.2-4.6 4.9-4.6 4.9 2.1 4.9 4.6S10.2 12 7.5 12zM7.5.8C3.7.8.7 3.7.7 7.3s3.1 6.5 6.8 6.5c3.8 0 6.8-2.9 6.8-6.5S11.3.8 7.5.8z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>

                            <input className="border rounded outline-none pl-6 text-sm py-1 w-full rounded-full bg-yellow-200 pr-3"/>
                        </div>

                    </div>
                    <div>
                        <p className="text-gray-800 pl-3 py-2 text-sm font-bold">Category : </p>
                        <div className="border-b">
                            {
                                categories.map((category,key)=>{
                                    return <FilterCateItem category={category}/>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-800 pl-3 py-2 text-sm font-bold">Location : </p>
                        <div>
                            <div className="flex items-center justify-start pl-1 py-1">
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    style={{padding:0}}
                                />
                                <p className="text-xs pl-1">less than 1~3 Km </p>

                            </div>
                            <div className="flex items-center justify-start pl-1 py-1">
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    style={{padding:0}}
                                />
                                <p className="text-xs pl-1">less than 3~5 Km </p>

                            </div>
                            <div className="flex items-center justify-start pl-1 py-1">
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    style={{padding:0}}
                                />
                                <p className="text-xs pl-1">less than 5~7 Km </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FilterLists;