/**
 * ************************************
 *
 * @module  TicketReason
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




const TicketReason = (props) => {
// class TicketReason extends Component {
  const [editable, setEditable] = useState(false)

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
    editable,
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
  `,
  })
  
  useEffect(() => {
    if (!editor) {
      return undefined
    }

    editor.setEditable(editable)
  }, [editor, editable])

  if (!editor) {
    return null
  }


  

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
      <span className="checkbox border border-1 rounded-3 mb-3 mt-2 p-2 border-primary shadow">
        <input
          type="checkbox"
          id="editable"
          value={editable}
          onChange={event => setEditable(event.target.checked)}
        />
        <label htmlFor="editable">&nbsp;&nbsp;— Editable</label>
      </span>

      <EditorContent className="editor__content container mt-3" editor={editor} />
      </div>
      </div>
  )



}

export default TicketReason;
 