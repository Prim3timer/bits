let SearchItem = ({search, setSearch})=> {
    return (
        <form  className="search-form"   onSubmit={(e)=> e.preventDefault()}>
            <input 
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