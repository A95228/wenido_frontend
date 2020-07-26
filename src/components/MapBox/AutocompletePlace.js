import React, { Component } from 'react'
import {TextField} from '@material-ui/core'
// import "./Autcomplete.css"
import axios from 'axios'

export default class AutocompletePlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: props.defaultValue,
            results: [],
            isLoading: false,
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)

        if (!process.env.REACT_APP_MAPBOX_API_KEY) {
            throw new Error("You don't have any 'process.env.REACT_APP_MAPBOX_API_KEY'")
        }
    }
    handleSearchChange(e) {
        this.setState({
            search: e.target.value,
            isLoading: true
        })

        // Stop the previous setTimeout if there is one in progress
        clearTimeout(this.timeoutId)

        // Launch a new request in 1000ms
        this.timeoutId = setTimeout(() => {
            this.performSearch()
        }, 1000)
    }
    performSearch() {
        if (this.state.search === "") {
            this.setState({
                results: [],
                isLoading: false
            })
            return
        }
        axios.defaults.xsrfHeaderName = null;
        axios.defaults.withCredentials = null;
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.search}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`)
            .then(response => {
                this.setState({
                    results: response.data.features,
                    isLoading: false
                })
            }).catch(error=>console.log(error.toString())).finally(()=>{
            axios.defaults.xsrfHeaderName = "X-CSRFToken";
            axios.defaults.withCredentials = true;
        })
    }
    handleItemClicked(place) {
        this.setState({
            search: place.place_name,
            results: []
        })
        this.props.onSelect(place)
    }

    render() {
        return (
            <div className="relative">
                <TextField value={this.state.search} onChange={this.handleSearchChange}
                           placeholder="Type an address"
                           variant={"outlined"}
                           fullWidth
                           name="place_name"
                           autoFocus
                           label="Address"
                           required
                />
                <ul className="w-full z-10 absolute bg-white text-black rounded pl-1 shadow">
                    {this.state.results.map(place => (
                        <li
                            key={place.id}
                            className="hover:font-bold hover:border-blue-500 cursor-pointer h-10 flex justify-start items-center"
                            onClick={() => this.handleItemClicked(place)}
                        >
                            {place.place_name}
                        </li>
                    ))}
                    {this.state.isLoading && <li className="h-10 flex items-center">Loading...</li>}
                </ul>
            </div>
        )
    }
}
