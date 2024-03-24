let SearchItem = ({search, setSearch})=> {
    return (
        <form  onSubmit={(e)=> e.preventDefault()}>
            <input className="search-form"
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