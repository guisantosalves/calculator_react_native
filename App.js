import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Buttons from './src/components/Buttons';
import Display from './src/components/Display';


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0 //valor atual
}
//usando class para exportar o component app
export default class App extends Component {
  state = {...initialState}; //spread operator

  addDigit = (n) => {
    //console.debug(typeof this.state.displayValue)
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue

    const displayValue = currentValue + n

    this.setState({displayValue, clearDisplay: false})

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  //limpa memória da calculadora
  clearMemory = () => {
    //volta ao estado inicial
    this.setState({...initialState})
  }

  setOperation = (operation) => {
    if(this.state.current === 0){
      //setando o operation que recebe no botao
      //setando o current para a póxima posição no array
      //limpando o display
      this.setState({operation: operation, current: 1, clearDisplay: true})
    }else {
      const equals = operation === '='

      //clone do array atual de values
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch(e){
        values[0] = this.state.values[0]
      }

      values[1] = 0
      
      this.setState({
        displayValue: `${values[0]}`,
        //se digitei '=' logo vai setar null em operation, caso eu digitei outro operador 
        //vai ser setado com o simbolo operacional que digitei
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values: values
      })
    }
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
