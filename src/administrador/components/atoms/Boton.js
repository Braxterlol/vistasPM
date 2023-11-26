import React from 'react';


export default function Boton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text} 
    </button>
  );
}
