import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Логін" />
      <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
      <TextInput style={styles.input} placeholder="Пароль" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 30,
   
  },
  input: {
    width: 343,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#E8E8E8',
  },
  button: {
    width: 343,
    height: 50,
    backgroundColor: '#FF6C00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
