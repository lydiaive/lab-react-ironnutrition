import { Divider, Input } from 'antd';


function Search(props) {

    const {searchHandler} = props

    return (
        <>
            <Divider>Search</Divider>
            <label>Search</label>
            <Input type="text" onChange={(event) =>searchHandler(event.target.value)} />
        </>
    );
}

export default Search;