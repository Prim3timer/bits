let SearchItem = ({search, setSearch})=> {
    return (
        <form  className="search-form" onSubmit={(e)=> e.preventDefault()}>
            <input 
            style={{padding: '0 .5rem', marginTop: '2rem'}}
            id="search"
            type="text"
            role="searchbox" 
            placeholder="Search Logs by name"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            
            />
            
        </form>
    )
}

export default SearchItem