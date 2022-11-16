import { Divider, Input } from 'antd';
/* import React, { useState } from "react" */


function Search(props) {

    const {onSearch} = props

 /*    const [searchTerm, setsearchTerm] = useState("") */

    /* const searchHandler = (event) => {
        setsearchTerm(event.target.value)
        props.onSearch(searchTerm)
        console.log(searchTerm)
    } */

    return (
        <>
            <Divider>Search</Divider>
            <label>Search</label>
            <Input type="text" onChange={(event) =>onSearch(event.target.value)} />
        </>
    );
}

export default Search;