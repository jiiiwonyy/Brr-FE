import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const HomeButton = ({ title, source, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Image source={source} style={styles.imageStyle} />
      <Text style={[styles.buttonText, buttonStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.buttonWraaper}>
        <HomeButton
          title="챗봇 이용하기"
          source={require('../../../assets/chatbot.png')}
          buttonStyle={styles.chatbotButton}
        />
        <HomeButton
          title="검색하기"
          source={require('../../../assets/search.png')}
          buttonStyle={styles.searchButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    margin: 20,
  },
  buttonWraaper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 20,
    margin: 10,
    width: 166,
    height: 166,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatbotButton: {
    backgroundColor: '#4285F4', // 챗봇 버튼의 배경색
  },
  searchButton: {
    backgroundColor: '#C2DCFF',
    color: '#000000',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 80, // 이미지 크기 조정
    height: 80,
    marginBottom: 10, // 이미지와 텍스트 간격 조정
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export { HomeScreen, HomeButton };
