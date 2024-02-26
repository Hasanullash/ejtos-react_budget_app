import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

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

    
    return (
        <tr>
        <td>{props.name}</td>
        <td>${Location}{parseInt(props.cost)}</td>
        <td><FaPlusCircle size='2.2em' color="#54db5d" onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={event=> increaseAllocation(props.name)}></FaMinusCircle></td>
        <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
