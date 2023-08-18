import React, { useState } from 'react';
import { View, TextInput, Text,  SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './common/styles';
const validatePhoneNumber = require('mnk_phone_val');
const formatterPhoneNumber = require('mnk_phone_formatter');


const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const [isValid, setIsValid] = useState(true);

  const phoneTextChange = (newText: any) =>{
    setIsValid(validatePhoneNumber(newText));
    setPhoneNumber(newText);

  }
  
  const phone2TextChange = (newText: any) =>{
    setPhoneNumber2(formatterPhoneNumber(newText));

  }

  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.loginText}>
          Login
        </Text>
      <TextInput
        placeholder="Phone Validate"
        value={phoneNumber}
        style={[styles.input, !isValid && styles.invalidInput]}
        onChangeText={phoneTextChange}
        keyboardType='phone-pad'
      />
      {!isValid && (
        <Text style={styles.warningText}>
          Geçerli bir Telefon Numarası girin!
        </Text>
      )}
      <TextInput
        placeholder="Phone Formatter"
        value={phoneNumber2}
        onChangeText={phone2TextChange}
        style={styles.input}
        keyboardType='phone-pad'
      />
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Doğrula</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
};



export default App;
