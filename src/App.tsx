import React from "react";
import GMap from './components/GMap';
import Search from "./components/search";
import SearchHistory from "./components/searchHistory";

function App() {
    return (
        <div className="layout">
            <Search />
            <GMap />
            <SearchHistory />
        </div>
    )
}

export default App
