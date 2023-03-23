import React from 'react';
import './style.css';


export default function Button({text}) {
  return (
    <button className='button button_danger'>
          {text}
    </button>
  )
}
