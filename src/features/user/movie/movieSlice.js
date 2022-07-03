import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend:[],
    newDisney:[],
    original:[],
    treding:[],
};

const movieSlice = createSlice ({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state , action)=>{
        state.recommend = action.payload.recommend;
        state.newDisney = action.payload.newDisney;
        state.original =   action.payload.original;
        state.treding = action.payload.treding;
        },
    },
})

export const {setMovies} = movieSlice.actions

export const selectRecommend = state => state.movie.recommend
export const selectNewDisney = state => state.movie.newDisney
export const selectOriginal = state => state.movie.original
export const selectTrending = state => state.movie.treding  

export default movieSlice.reducer