// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet ,Image,} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View >
        <Image source={require("./logobg.png")}  style = {styles.logo}/>
        <Image source={require('./Group 6 (2).png')}  style={{resizeMode:'cover',marginLeft:50}}/>
        <Text style={styles.text}>Farm fresh for all.</Text>
      </View>
      <Image source={require('./hero 1.png')} style={{height: 200,resizeMode:"repeat",}}/>
      
      <Button color='#0BCE83'
        title="Get Started!"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7519EB',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color:'white',
    marginTop:-250,
  },
  logo:{
    resizeMode: 'contain',
    height: 50,
    width: 50,
    margin:150,

  },
  button: {
    backgroundColor: '#0BCE83',
    padding: 10,
    borderRadius: 25,
  },
  
});

export default HomeScreen;
