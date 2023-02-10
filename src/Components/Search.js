function Search({imgName,setImg}) {
    return(
        <div className="SearchBarContainer">
            <input type="text" className="Search-Bar" placeholder="Search..." value={imgName} onChange={(e) => setImg(e.target.value)}></input>
        </div>
    );
}

export default Search;