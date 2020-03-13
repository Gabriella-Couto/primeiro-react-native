import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component{
  constructor (props){
    super (props);
      this.state = {
      number: []
    }
  }

  generateRandomNumber(){
    let n = [];

    for(var i = 0; i <= 5; i++){
      n.push(Math.floor(Math.random() * 60) + ", ");
    }
      
    this.setState({
      number: n
    })
  }


  render (){
    return (
      <View style={styles.container}>
      <Text>{this.state.number}</Text>
      <Button
      title="Gerar número aleatório"
      onPress={() => {this.generateRandomNumber()}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
