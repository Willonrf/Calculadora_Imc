import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';

export default class Calculadora extends Component {
  state = {
    altura: 0,
    peso: 0,
    resultado: 0,
    result: "IMC:",
    classificacao: "Classificação:"
  }
  clicar = () => {
    if(!(this.state.result == "IMC:" || this.state.classificacao == "Classificação:")){
      this.state.result = "IMC:";
      this.state.classificacao = "Classificação:";
    }
    if(!(isNaN(this.state.altura) || isNaN(this.state.peso))){
      var res = parseFloat(this.state.peso)/(parseFloat(this.state.altura) * parseFloat(this.state.altura));
      var resultado = parseFloat(res.toFixed(2));
      this.setState({resultado});
      this.state.result += " " + resultado;
      if(resultado < 18.5){
        this.state.classificacao += " MAGREZA";
      }else if(resultado < 24.9){
        this.state.classificacao += " NORMAL";
      }else if(resultado < 29.9){
        this.state.classificacao += " SOBREPESO";
      }else if(resultado < 39.9){
        this.state.classificacao += " OBESIDADE";
      }else if(resultado > 39.9){
        this.state.classificacao += " OBESIDADE GRAVE";
      }
    }else{
      alert("Digite dois números");
    }
  }

  render() {
    return(
      <SafeAreaView style = {styles.container}>
        <View> 
          <Text style = {styles.titulo}>
            Cálculo de IMC
          </Text>
        </View>
        <View>
          <TextInput placeholder = "Altura (em cm)"
            style = {styles.input}
            keyboardType = {"numeric"}
            value={this.state.altura.toString()}
            onChangeText={
              (altura) => {
                this.setState({altura});
              }
            }
          />
          <TextInput placeholder = "Peso (em kg)"
            style = {styles.input}
            keyboardType = {"numeric"}
            value={this.state.peso.toString()}
            onChangeText={
              (peso) => {
                this.setState({peso});
              }
            }
          />
        </View>
        <View style={styles.divBotao}>
          <Button title= 'Calcular'
            onPress = {this.clicar}
            color = '#2F4F4F'
          />
        </View>
        <View >
            <TextInput placeholder = 'Resultado'
              style = {styles.resultado}
              value = {this.state.result.toString()}
            />
        </View>
        <View >
            <TextInput placeholder = 'Classificacao'
              style = {styles.resultado}
              value = {this.state.classificacao.toString()}
            />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10  
  },
  titulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#2F4F4F',
    margin: 10,
    padding: 10
  },
  divBotao: {
    padding: 10,
  },
  resultado: {
    height: 40,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    margin: 10,
    padding: 10,
    backgroundColor : '#aaaaaa'
  }
});

/* export default App; */
