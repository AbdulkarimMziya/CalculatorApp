import { useState } from 'react'
import './calculator.scss'
import Keypad from './Keypad/Keypad'





const ops =['/' , '*', '-', '+', '%']                                                                         

export default function Calculator(){

    const [currExpression, setCurrExpression] = useState('');
    const [total, setTotal] = useState(0);

    const buttons = [{btn:'Clear' , type: 'action'} , {btn:'Del' , type: 'action'},
                     {btn:'%' , type: 'operator'}, {btn:'/' , type: 'operator'},
                     {btn:'7' , type: 'digit'},
                     {btn:'8' , type: 'digit'},
                     {btn:'9' , type: 'digit'},
                     {btn:'*' , type: 'operator'},
                     {btn:'4' , type: 'digit'},
                     {btn:'5' , type: 'digit'},
                     {btn:'6' , type: 'digit'},
                     {btn:'-' , type: 'operator'},
                     {btn:'1' , type: 'digit'},
                     {btn:'2' , type: 'digit'},
                     {btn:'3' , type: 'digit'},
                     {btn:'+' , type: 'operator'},
                     {btn:'0' , type: 'digit'},
                     {btn:'=' , type: 'operator'},
    ]


    const handleClick = (input) => {
       // Handle Clear and Del separately
        if (input === 'Clear') {
            setCurrExpression('')
            setTotal('0')
            return;
        }

        if (input === 'Del') {
            setCurrExpression((prevExpression) =>
              prevExpression.slice(0, prevExpression.length - 1)
            );
            return;
          }
        
        if(ops.includes(input) && currExpression === '' ||
            ops.includes(input) && ops.includes(currExpression.slice(-1))
        ){
            return;
        }
        

        // Handle other inputs (digits, operators, etc.)
        setCurrExpression((prevExpression) => prevExpression + input);

        if(input === '=' && !ops.includes(currExpression.slice(-1))){  
            try{
                const result = eval(currExpression)
                setTotal(result)
            } catch(error){
                setCurrExpression('Error')
                setTotal('Error')
            }
        }
        
    }
  

    return (
        <div className="Calculator">
            
            <div className="displayContainer">
               <div className="showOperands">{currExpression}</div>
               <div className="showTotal">{total}</div>
            </div>

            <div className="keypadContainer">
                <Keypad buttons = {buttons} onClick = {handleClick} />
            </div>

        </div>
    )
}