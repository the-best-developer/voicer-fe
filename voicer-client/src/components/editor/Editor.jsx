import React from 'react'
import {HtmlEditor, MenuBar} from '@aeaton/react-prosemirror'
import {options, menu} from '@aeaton/react-prosemirror-config-default'

const Editor = ({value, onChange}) =>{

  return(
    <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
    render={({ editor, view }) => (
      <div>
        <MenuBar menu={menu} view={view} />
        {editor}
      </div>
    )}
  />
  )
}

export default Editor


