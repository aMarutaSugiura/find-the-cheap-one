import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { randomUUID } from 'crypto';
import { RootState } from '../../app/store';

interface inputItem {
    // name: Nullable<string>;
    amount: number;
    price: number;
}

interface listedItem {
    // id: string;
    // name: string;
    amount: number;
    price: number;
    pricePerAmount: number;
}

export const itemListSlice = createSlice({
    name: 'itemList',
    initialState: [] as listedItem[],
    reducers:{
        addItem: (state, action: PayloadAction<inputItem>) =>{
            const {amount, price} = action.payload;
            if (amount === 0 || price === 0) return;
            const pricePerAmount = price / amount;
            state.push({amount, price, pricePerAmount});
        },
        removeItem: (state, action: PayloadAction<listedItem>) =>{
        }
    }
})

export const { addItem, removeItem } = itemListSlice.actions;

export const listedItem = (state: RootState) => state.itemList;

export default itemListSlice.reducer;