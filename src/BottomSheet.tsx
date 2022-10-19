import React, { useState } from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'

const PhoneSignIn = ({ setFlag, refRBSheet }: any) => {
  const [confirmationCode, setConfirm] = useState<any>(null)
  const [phoneNo, setPhoneNo] = useState('')
  const [code, setCode] = useState('')

  const Clicked = () => {
    refRBSheet.current.close()
    setFlag(false)
  }

  const confirmOTP = () => {
    console.log('code is :', code)

    try {
      Clicked()
      console.log('Opening Scanner')
    } catch (error) {
      console.log('error:- ', error)
    }
  }

  if (!confirmationCode) {
    return (
      <>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhoneNo(text)}
          placeholder='Enter Your Phone No.'
          value={phoneNo}
        />
        <Button title='Send OTP' onPress={() => setConfirm('pressed')} />
      </>
    )
  }

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCode(text)}
        value={code}
        placeholder='Enter OTP'
        keyboardType='numeric'
      />
      <Button title='Confirm OTP' onPress={() => confirmOTP()} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default PhoneSignIn
