import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';

export default function SearchHistory () {
    const searchHistory = useSelector((state: RootState) => state.map.history)

    return <div className="history">
        Search History:
        <ul>
            {
                searchHistory.map((location, index) => <li key={index}>{location}</li>)
            }
        </ul>
    </div>
}
