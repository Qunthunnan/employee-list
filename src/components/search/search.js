import './search.css';

function Search ({ onSearch }) {
    return (
        <input type="text" onChange={(e) => {
             const searchValue = e.target.value.replace(/\P{L}/gmu, '');
             console.log(searchValue);
             onSearch(searchValue) }
            } className="search" placeholder="Знайти співробітника"/>
    );
}

export default Search;