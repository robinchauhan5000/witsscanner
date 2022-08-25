import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-native'
import witsdocsscannerModule, {
  WitsScanner,
} from 'witsdocsscanner'
import { Camera } from 'react-native-vision-camera'

const App = () => {
  const [state, setState] = useState({})
  const apiKey =
    'SQSKUdOMO6BcbK1I090571wsfl0JMjWPd971AIMidtIJqWkJmL13l8umXzEjQmoP'
  const url =
    'https://asli-documents-service.dev.in.affinidi.io/api/v1/documents/extract-document'

  useEffect(() => {
    console.log('state', state)
  })

  return (
    <WitsScanner
      apiKey={apiKey}
      url={url}
      documentType='PANCR'
      getResponse={setState} 
    />
  )
}

export default App
