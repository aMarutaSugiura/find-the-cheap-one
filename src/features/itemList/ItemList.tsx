import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {addItem, resetItem, listedItem } from './itemListSlice';


export function ItemList() {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const items = useAppSelector(listedItem);
    return (
        <div>
            <div style={{margin: '3rem 0 3rem 0'}}>     
                <input type="number" value={amount !== 0 ? amount : ''} pattern="[0-9]*" placeholder="量" min="0" onChange={(e) => setAmount(parseInt(e.target.value))} style={{width: '15%', fontSize: '16px', margin: '0 0.5rem'}}></input>/
                <input type="number" value={price !== 0 ? price : ''} pattern="[0-9]*" placeholder="金額" min="0" onChange={(e)=> setPrice(parseInt(e.target.value))} style={{width: '15%', fontSize: '16px', margin: '0 0.5rem'}}></input>円
                <input type="submit" onClick={()=>{
                    dispatch(addItem({amount, price}));
                    setAmount(0);
                    setPrice(0);
                    }
                    }></input>
            </div>
            <div　style={{textAlign: 'left'}}>
                <input type="button" value="リセット" onClick={()=>dispatch(resetItem())} style={{margin: '0 0 0.5rem 1rem'}}></input>
            </div>
            <table style={{border: '1px solid black', position: 'relative'}} align='center'>
                <thead style={{borderBottom: '1px solid black'}}>
                <tr><th style={{width: '30%', borderBottom: '1px solid black'}}>量</th><th style={{width: '30%', borderBottom: '1px solid black'}}>金額</th><th style={{width: '30%', borderBottom: '1px solid black'}}>小さいほど安い</th></tr>
                </thead>
                <tbody>
                {items.map((item) =>{
                    return(
                        <tr key={item.id}><td style={{width: '30%'}}>{item.amount}</td><td style={{width: '30%'}}>{item.price}円</td><td style={{width: '30%'}}>{item.pricePerAmount}</td></tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}