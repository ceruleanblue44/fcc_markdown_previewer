import React from 'react';
import marked from 'marked';

const Output = (props) => {
  return (
    <div className='output'>
      <div className='output-header'>
        <h3>Markdown Output</h3>
      </div>
      <div className='output-area'>
        <div id='preview' dangerouslySetInnerHTML={{ __html: marked(props.markdown) }} />
      </div>
    </div>
  )
}

export default Output;