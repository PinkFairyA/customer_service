/**
 * ************************************
 *
 * @module  CustomerNotes
 * @author
 * @date
 * @description presentation component that renders a single box for each CustomerDetail
 *
 * ************************************
 */
 import React, {
  useCallback, useEffect,
  useState,
} from 'react';
 import { useDispatch} from 'react-redux'
//  import { Editor } from '@tiptap/core'
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

 import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
//  import { daEditor, MenuBar} from './notesMenuBar.jsx'
 
import '../_custom.scss'
import '../styles/MenuBar.scss'
import '../styles/MenuItem.scss'
import MenuBar from './MenuBar.jsx'


// import { EditorContent, useEditor } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import React from 'react'

// const MenuBar = ({ editor }) => {
//   if (!editor) {
//     return null
//   }

//   return (
//     <>
//       <button
//         onClick={() => editor.chain().focus().toggleBold().run()}
//         className={editor.isActive('bold') ? 'is-active' : ''}
//       >
//         bold
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleItalic().run()}
//         className={editor.isActive('italic') ? 'is-active' : ''}
//       >
//         italic
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleStrike().run()}
//         className={editor.isActive('strike') ? 'is-active' : ''}
//       >
//         strike
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleCode().run()}
//         className={editor.isActive('code') ? 'is-active' : ''}
//       >
//         code
//       </button>
//       <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
//         clear marks
//       </button>
//       <button onClick={() => editor.chain().focus().clearNodes().run()}>
//         clear nodes
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setParagraph().run()}
//         className={editor.isActive('paragraph') ? 'is-active' : ''}
//       >
//         paragraph
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//         className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
//       >
//         h1
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
//       >
//         h2
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//         className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
//       >
//         h3
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//         className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
//       >
//         h4
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//         className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
//       >
//         h5
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//         className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
//       >
//         h6
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleBulletList().run()}
//         className={editor.isActive('bulletList') ? 'is-active' : ''}
//       >
//         bullet list
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleOrderedList().run()}
//         className={editor.isActive('orderedList') ? 'is-active' : ''}
//       >
//         ordered list
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//         className={editor.isActive('codeBlock') ? 'is-active' : ''}
//       >
//         code block
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleBlockquote().run()}
//         className={editor.isActive('blockquote') ? 'is-active' : ''}
//       >
//         blockquote
//       </button>
//       <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//         horizontal rule
//       </button>
//       <button onClick={() => editor.chain().focus().setHardBreak().run()}>
//         hard break
//       </button>
//       <button onClick={() => editor.chain().focus().undo().run()}>
//         undo
//       </button>
//       <button onClick={() => editor.chain().focus().redo().run()}>
//         redo
//       </button>
//     </>
//   )
// }


const TicketNotes = (props) => {
// class TicketNotes extends Component {


  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
    content:  `
    <h2>
      Hi there,
    </h2>
    <p>
      Now is the time for all good men and women to come to the aid of their country.
       Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
    <pre><code class="language-css">body {
display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `,
  })
  
  

  

//   return (
  //       <div className="editor container border border-3 rounded-3 mt-2 p-2 border-info shadow">

//     <MenuBar editor={editor} />
//       </div>
//       <div className="container border border-3 rounded-3 mt-2 p-2 border-info shadow">

//         <EditorContent className="editor__content" editor={editor} />
// </div>
// </div>
//   );

  return (
    <div className='container border border-3 rounded-3 mt-2 p-2 border-info shadow'>
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <EditorContent className="editor__content container border border-3 rounded-3 mt-2 p-2 border-info shadow" editor={editor} />
      </div>
      </div>
  )



}

export default TicketNotes;
 