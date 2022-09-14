import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MapState {
    address: string,
    coordinates: {
        lat: any,
        lng: any
    },
    history: any[]
}

const initialState: MapState = {
    address: '',
    coordinates: {
        lat: 5.2983,
        lng: 100.2637
    },
    history: []
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        searchLocation: (state, action: PayloadAction<MapState>) => {
            state.address = action.payload.address;
            state.coordinates = action.payload.coordinates;
            state.history = [...state.history, ...action.payload.history];
        },
    },
})

export const { searchLocation } = mapSlice.actions

export default mapSlice.reducer