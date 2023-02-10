import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setDecimal, setRoman } from '../store/slice/coverterSlice';
const Convertidor = () => {
  const [input,setInput] = useState('')
  const {roman} = useSelector(state=>state.convert)
  const dispatch = useDispatch();
  return (
    <div className='converter'>
        <div className='calculate'>
        <div className='card'>
            <div className='card-title text-center'>
                <h3>Convert Decimal To Roman</h3>
            </div>
            <div className='card-body'>
              <input type="number" className='form-control' id="decimal" placeholder='Decimal Number' min="1" max="4999" value={input} onChange={(e)=>{
                setInput(e.target.value)
              }}/>
              <br/>
              <input type="text" value={roman} className='form-control' placeholder='Roman Number' readOnly/>
              <hr/>
              <div id='boton-main'>
                <button className='btn btn-outline-primary' onClick={()=>{
                  if(Number(input) >0 && Number(input) < 5000){
                    dispatch(setDecimal(Number(input)))
                    dispatch(setRoman())
                  }else{
                    alert("The number must be more to 0 and less to 5000")
                  } 
                    
                }
                }>Convert</button>
              </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Convertidor