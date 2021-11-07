import React from 'react';

const Input = (props) => {
  return (
    <div className='input'>
      <div className='input-header'>
        <h3>Markdown Input</h3>
      </div>
      <textarea id='editor' value={props.markdown} onChange={props.onChange} type='text' />
    </div>
  )
}

export default Input;