import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const changeBudget = (newBudget) => {            
        if(newBudget > 20000) {
            alert("The budget cannot exceed £20000");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(newBudget < totalExpenses) {
            alert("The budget cannot be reduced than the current expenditure £" + totalExpenses);
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });
        
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget:</span> £<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '0rem' , size: 10}}
                        onChange={(event) => changeBudget(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;
