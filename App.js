
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Buttons from './src/components/Buttons';



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Buttons label='AC'/>
        <Buttons label='/'/>
        <Buttons label='7'/>
        <Buttons label='8'/>
        <Buttons label='9'/>
        <Buttons label='*'/>
        <Buttons label='4'/>
        <Buttons label='5'/>
        <Buttons label='6'/>
        <Buttons label='-'/>
        <Buttons label='1'/>
        <Buttons label='2'/>
        <Buttons label='3'/>
        <Buttons label='+'/>
        <Buttons label='0'/>
        <Buttons label='.'/>
        <Buttons label='='/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap' //define que o elemento pode quebrar linha
  }
});

export default App;
