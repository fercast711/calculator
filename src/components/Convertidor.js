import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setDecimal, setRoman } from '../store/slice/coverterSlice';
const Convertidor = () => {
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
              <input type="number" className='form-control' id="decimal" placeholder='Decimal Number' min="1" max="4999"/>
              <br/>
              <input type="text" value={roman} className='form-control' placeholder='Roman Number' readOnly/>
              <hr/>
              <div id='boton-main'>
                <button className='btn btn-outline-primary' onClick={()=>{
                  if(Number(document.getElementById("decimal").value) >0 && Number(document.getElementById("decimal").value) < 5000){
                    dispatch(setDecimal(Number(document.getElementById("decimal").value)))
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