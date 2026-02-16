import React from 'react'
import {bancos} from './bancos.js'


const banos = () => {
  return (
    <div>
        <h1>
            lista de bancos
        </h1>
           <ul>
            {bancos.map((a) => (
                <li key={a.id}>
                    {a.name} - {a.country}
                </li>)            
            )}
           </ul>
    </div>
  )
}

export default banos