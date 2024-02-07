// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet ,Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Farm fresh for all.</Text>
      <Image source={require('./Group 6 (2).png')} />
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
    fontSize: 24,
    fontWeight: 'bold',
    color:'white',
  },
  button: {
    backgroundColor: '#0BCE83',
    padding: 10,
    borderRadius: 25,
  },
});

export default HomeScreen;
