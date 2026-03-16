import {useState} from 'react';

const SearchItems = [
    "aardvark",
    "banana",
    "cauldron"
];

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
    );
}

const SuggestionListComponent = ({search, items}) => {

    if(items.length === 0) {
        items = ["No results found"];
    }

    if(search === "") {
        return (
            <ul className = "auto-suggest"></ul>
        );
    }

    return (
        <ul className = "auto-suggest">
            {items.map((item, idx) => (
                <li key = {idx} className = "suggest-item">
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default function Search () {
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = SearchItems.filter( item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <SearchBarComponent search = {searchTerm} setSearch = {setSearchTerm} />
            <SuggestionListComponent search = {searchTerm} items = {filtered} />
        </div>
    );
}