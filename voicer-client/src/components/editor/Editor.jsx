import React, { useState } from "react"
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror"
import { options, menu } from "@aeaton/react-prosemirror-config-default"

const Editor = ({ value, onChange }) => {
  const [mdValue, setMdValue] = useState("")

  console.log("value", value)
  return (
    <HtmlEditor
      options={options}
      value={mdValue}
      onChange={(e) => {
        console.log(JSON.stringify(e, null, 2))
        setMdValue(JSON.stringify(e, null, 2))
      }}
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
