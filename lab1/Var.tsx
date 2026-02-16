import React from 'react'
const items = ['item1', 'item2', 'item3'];

const Var = () => {
  return (
    <div>
        <h1>
            numeros
        </h1>
           <ul>
            {
                items.map((item,index) => (
                    <li key={index}>{item}</li>
                ))
            }
           </ul>
    </div>
  )
}

export default Var