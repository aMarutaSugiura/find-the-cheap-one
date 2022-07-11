import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {addItem, listedItem,} from './itemListSlice';


export function ItemList() {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const items = useAppSelector(listedItem);
    return (
        <div>
            <div>     
                <input type="number" value={amount !== 0 ? amount : ''} placeholder="量" min="0" onChange={(e) => setAmount(parseInt(e.target.value))} style={{width: '15%', fontSize: '16px', margin: '0 0.5rem'}}></input>
                <input type="number" value={price !== 0 ? price : ''} placeholder="金額" min="0" onChange={(e)=> setPrice(parseInt(e.target.value))} style={{width: '15%', fontSize: '16px', margin: '0 0.5rem'}}></input>円
                <input type="submit" onClick={()=>dispatch(addItem({amount, price}))}></input>
            </div>
            <table style={{border: '1px solid black'}}>
                <thead style={{borderBottom: '1px solid black'}}>
                <tr><th style={{width: '30%', borderBottom: '1px solid black'}}>量</th><th style={{width: '30%', borderBottom: '1px solid black'}}>金額</th><th style={{width: '30%', borderBottom: '1px solid black'}}>小さいほど安い</th></tr>
                </thead>
                <tbody>
                {items.map((item) =>{
                    return(
                        <tr><td style={{width: '30%'}}>{item.amount}</td> <td style={{width: '30%'}}>{item.price}円</td> <td style={{width: '30%'}}>{item.pricePerAmount}</td></tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}