import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Buttons from './src/components/Buttons';
import Display from './src/components/Display';


//usando class para exportar o component app
export default class App extends Component {
  state = {
    displayValue: '0'
  };

  addDigit = (n) => {
    //vai setar o valor do display com o valor dado no parâmetro
    this.setState({displayValue: n})
  }

  //limpa memória da calculadora
  clearMemory = () => {
    this.setState({displayValue: '0'})
  }

  setOperation = (operation) => {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          {/* nao preciso passar como arrow function pq ja passo no componente buttons */}
          <Buttons label="AC" triple onClick={this.clearMemory}/>
          <Buttons label="/" operation onClick={this.setOperation}/>
          <Buttons label="7" onClick={this.addDigit}/>
          <Buttons label="8" onClick={this.addDigit}/>
          <Buttons label="9" onClick={this.addDigit}/>
          <Buttons label="*" operation onClick={this.setOperation}/>
          <Buttons label="4" onClick={this.addDigit}/>
          <Buttons label="5" onClick={this.addDigit}/>
          <Buttons label="6" onClick={this.addDigit}/>
          <Buttons label="-" operation onClick={this.setOperation}/>
          <Buttons label="1" onClick={this.addDigit}/>
          <Buttons label="2" onClick={this.addDigit}/>
          <Buttons label="3" onClick={this.addDigit}/>
          <Buttons label="+" operation onClick={this.setOperation}/>
          <Buttons label="0" double onClick={this.addDigit}/>
          <Buttons label="." onClick={this.addDigit}/>
          <Buttons label="=" operation onClick={this.setOperation}/>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap', //define que o elemento pode quebrar linha
  },
});
