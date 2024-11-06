import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const InputField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <InputField
        placeholder="아이디 또는 이메일주소"
        value=""
        onChangeText={() => {}}
      />
      <InputField
        placeholder="비밀번호"
        value=""
        onChangeText={() => {}}
        secureTextEntry={true}
      />
      <Text style={styles.resetPassword}>비밀번호 재설정</Text>
      <Text style={styles.signUpText}>
        아직 계정이 없으신가요? <Text style={styles.signUpLink}>회원가입</Text>
      </Text>
      <Button title="로그인" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#B0B0B0',
  },

  resetPassword: {
    alignSelf: 'flex-end',
    color: '#4285F4',
    marginBottom: 20,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    color: '#000000',
  },
  signUpLink: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
});

export { Button, InputField, LoginScreen };
