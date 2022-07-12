import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { RootState } from '../../app/store';

interface listedItem {
    id: string;
    // name: string;
    amount: number;
    price: number;
    pricePerAmount: number;
}

export const itemListSlice = createSlice({
    name: 'itemList',
    initialState: [] as listedItem[],
    reducers:{
        addItem: (state, action) =>{
            const {amount, price} = action.payload;
            if (amount === 0 || price === 0) return;
            const pricePerAmount = Math.round((price / amount) *100) /100;
            const id = uuidv4();
            state.push({amount, price, pricePerAmount, id});
        },
        removeItem: (state, action: PayloadAction<listedItem>) =>{
        },
        resetItem: (state) =>{  
            state.length = 0;          
        }
    }
})

export const { addItem, removeItem, resetItem } = itemListSlice.actions;

export const listedItem = (state: RootState) => state.itemList;

export default itemListSlice.reducer;