import React from 'react'
import {marked} from 'marked'
import "./MarkdownPreviewer.scss"


class MarkdownPreviewer extends React.Component {
    constructor() {
        super();
        this.state = {
            markdown: `# Heading 1
            ## Heading 2
            [Link](https://example.com)
            \`Inline code\`
            \`\`\`
            // Code block
            function greet() {
              console.log("Hello!");
            }
            \`\`\`
            - List item
            > Blockquote
            ![Image](https://example.com/image.jpg)
            **Bold text**`,
        };
    }

    handleChange = (event) => {
        this.setState({markdown: event.target.value});
    };


    render() {
        const { markdown} = this.state;
        const html = marked(markdown, {breaks:true});

        return (
            <div className='markdown-previewer'>
                <div className='editor'>
                    <textarea onChange={this.handleChange} value={markdown} placeholder='Enter something in the Markdown here' />

                </div>
                <div id="previewe" className='previewe' dangerouslySetInnerHTML={{ __html: html}}></div>
            </div>
        )
    }
}


export default MarkdownPreviewer