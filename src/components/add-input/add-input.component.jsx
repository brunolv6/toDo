import React from 'react';

import './add-input.style.css';

export const AddInput = ({ todo, handleChange, handleAdd }) => (
    <div>
        <div>
        <input autoFocus type="text" placeholder="o que fará?"
            onChange={handleChange}
          />
          <button onClick={handleAdd}>add</button>
        </div>
        {
          todo.map(td => (
            <h3> {td} </h3>
          ))
        }
    </div>
)