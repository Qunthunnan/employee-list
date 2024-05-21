import './search.css';

const searching = (e) => {
    console.dir(e.target);
    console.log(e.target.value);
}

function Search () {
    return (
        <input type="text" onChange={searching} className="search" placeholder="Знайти співробітника"/>
    );
}

export default Search;