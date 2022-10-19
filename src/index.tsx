import React, { useRef, useState } from 'react'
import { Button, NativeModules, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'

import PhoneSignIn from './BottomSheet'
import CameraComponent from './Camera'

export const WitsScanner = ({ setState }: any) => {
  const [flag, setFlag] = useState(true)
  const [data, setData] = useState(null)
  console.log(data)

  const refRBSheet = useRef<any>(null)
  return (
    <View>
      {flag ? (
        <View>
          <Button
            title='Welcome to Wits Scanner'
            onPress={() => refRBSheet.current.open()}
          />
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}
          >
            <PhoneSignIn setFlag={setFlag} refRBSheet={refRBSheet} />
          </RBSheet>
        </View>
      ) : (
        <View style={{ height: '100%', width: '100%' }}>
          <CameraComponent
            url='https://asli-documents-service.dev.in.affinidi.io/api/v1/documents/extract-document'
            apiKey='SQSKUdOMO6BcbK1I090571wsfl0JMjWPd971AIMidtIJqWkJmL13l8umXzEjQmoP'
            documentType='ADHAR'
            getResponse={setState}
          />
        </View>
      )}
    </View>
  )
}

export default NativeModules.witsdocsscannerModule
