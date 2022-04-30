import { useState } from 'react'

import Editor from './Editor'

function App() {
  const [code, setCode] = useState(``);

  return (
    <Editor
      code={code}
      onChange={setCode}
      styles={{
        container: {
          width: '500px',
          minHeight: '600px',
          backgroundColor: 'beige'
        }
      }}
    />
  )
}

export default App
