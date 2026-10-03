import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
 
  const [num1, setNum1] = useState('');   // pra guardar os nº digitados
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');     // pra guardar o resultado
  
  const somar = () => setResultado(parseFloat(num1) + parseFloat(num2));        // pra converter os textos em nº com parsefloat e mostra a soma
  const subtrair = () => setResultado(parseFloat(num1) - parseFloat(num2));     // subtração
  const multiplicar = () => setResultado(parseFloat(num1) * parseFloat(num2));  // multiplicação
  const dividir = () => setResultado(parseFloat(num1) / parseFloat(num2));      // divisão


  return (              // o return define o que aparece na tela
  // envolver tudo
    <View style={styles.container}>       
    <Image style={styles.imagem} source={require('./assets/calculadora.png')}/>

    {/*campo do 1 número*/}
      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      {/*campo do 2 número*/}
      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      {/*linha que agrupa os quatro botões*/}
      <View style={styles.linha}>

        {/*botão de soma*/}
        <TouchableOpacity style={styles.botao} onPress={somar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        {/*botão de subtração*/}
        <TouchableOpacity style={styles.botao} onPress={subtrair}>
          <Text style={styles.textoBotao}>−</Text>
        </TouchableOpacity>

        {/*botão de multiplicação*/}
        <TouchableOpacity style={styles.botao} onPress={multiplicar}>
          <Text style={styles.textoBotao}>×</Text>
        </TouchableOpacity>

        {/*botão de divisão*/}
        <TouchableOpacity style={styles.botao} onPress={dividir}>
          <Text style={styles.textoBotao}>÷</Text>
        </TouchableOpacity>
      </View>

      {/*mostra o resultado*/}
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#fff',
  },
  imagem: {
  width: 160,
  height: 160,
  alignSelf: 'center',
  marginBottom: 20,
},
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  botao: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FF007F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 28,
  },
  resultado: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
  },
});
