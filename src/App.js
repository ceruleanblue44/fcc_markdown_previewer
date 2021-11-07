import React from 'react';
import marked from 'marked';
import './App.scss';
import Input from './Input.js'
import Output from './Output.js'

marked.setOptions({
  breaks: true,
  // gfm: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.createMarkdown = this.createMarkdown.bind(this);
  }

  createMarkdown(event) {
    this.setState({
      markdown: event.target.value
    });

  }

  render() {
    return (
      <div className='container'>
        <Input markdown={this.state.markdown} onChange={this.createMarkdown} />
        <Output markdown={this.state.markdown} />
      </div>
    );
  }
}

const placeholder = `
# Frontend Libraries Project 2 - Markdown Previewer

## This is an h2 header

### This is an h3 header

GitHub has it's own version of [Markdown](https://github.com/markedjs/marked/, 'GitHub Flavored Markdown')

Backticks are used to display inline code, like this: \`<div></div>\`

\`\`\`

// Triple backticks to display a code block
if (sad == true) {
  sad.stop();
  beAwesome();
}

\`\`\`

There are ordered lists and unordered (bulleted) lists.

Ordered lists look like this:

1. Item1
9. Item2
7. Item3

And here's an unordered list:

- Item1
- Item2
- Item3
  * Nested item1
    * Nested item2

_Asterisk or underscore_ *make text italic*\\.
**Double asterisk or underscore** __make text bold__.
It's also possible to use them **_both together_** or ~~cross words out~~.

It's easy. As the creator of [Markdown](https://daringfireball.net/projects/markdown/) says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

![Markdown logo](https://marked.js.org/img/logo-black.svg)
`

// You need a second backslash to escape a period, otherwise it's all italic till the **_

export default App;
