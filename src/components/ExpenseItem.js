import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} class="btn btn-outline-light"><img height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/More_Icon_C.svg/120px-More_Icon_C.svg.png?20131211221348"></img></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} class="btn btn-outline-light"><img height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Less_Icon_C.svg/120px-Less_Icon_C.svg.png?20131211221353"></img></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
