import {useState} from 'react';

const SearchItems = [
    "aardvark",
    "banana",
    "cannon",
    "dog",
    "elephant",
    "Fox",
    "goose",
    "hen",
    "ibis",
    "jackal"
]

const SearchBarComponent = ({search, setSearch}) => {
    return (
        <form id = "search">
            <input 
                name = "search" 
                type = "text"
                value = {search}
                className = "input__rounded" 
                aria-label = "Search" 
                onChange = {(evt) => setSearch(evt.target.value)}
            />
            <button type = "submit"><i className = "fa fa-search"></i></button>
        </form>
    )
}

const SuggestionListComponent = ({search, items}) => {

}

export default function Search () {
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = SearchItems.filter( item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <SearchBarComponent search = {searchTerm} setSearch = {setSearchTerm} />
            <SuggestionListComponent />
        </div>
    )
}