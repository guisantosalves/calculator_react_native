import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default (props) => {
    return(
      <View style={style.display}>
          <Text style={style.displayValue} numberOfLines={1}>
              {props.value}
          </Text>
      </View>  
    )
}


const style = StyleSheet.create({
    display:{
        flex: 1, //permite o coponente crescer de acordo com a necessidade
        padding: 20,
        justifyContent: 'center', //justifyContent -> eixo vertical (principal)
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end', //alignItems -> eixo horizontal (secundário)
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})