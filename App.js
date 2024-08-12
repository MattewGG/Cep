import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from './api';

export default function App() {
  const [cep, setCep ] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf]= useState("")
  const [ibge, setIbge]= useState("")
  const [complemento, setComplemento] = useState("")
  const [ddd, setDdd] = useState("")
  async function buscarCep(){
    if(cep == ""){
      Alert.alert("Cep invalido")
       setCep("")
    }
    try {
        const response = await api.get(`/${cep}/json/`)
        setLogradouro(response.data.logradouro)
        setBairro(response.data.bairro)
        setLocalidade(response.data.localidade)
        setUf(response.data.uf)
        setIbge(response.data.ibge)
        setComplemento(response.data.complemento)
        setDdd(response.data.ddd)
    } catch (error) {
        console.log("Error"+ error)
    }
  }

  


  return (
    <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={styles.title}><h1>BUSCADOR DE CEP</h1></Text>


        </View>
        <View style={styles.cep} >
          <TextInput style={styles.input} 
           
            value={cep} 
            onChangeText={(texto) => setCep(texto)}
            placeholder='CEP' />
            <TouchableOpacity style={styles.button} onPress={buscarCep}>
              <Text style={styles.ButtonText}>Buscar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.main}>
        <TextInput style={styles.caixas} 
           value={logradouro} 
           onChangeText={(texto) => setLogradouro(texto)}
           placeholder='Logradouro' />
         <TextInput style={styles.caixas} 
           
           value={bairro} 
           onChangeText={(texto) => setBairro(texto)}
           placeholder='Bairro' />
          <TextInput style={styles.caixas} 
           
           value={localidade} 
           onChangeText={(texto) => setLocalidade(texto)}
           placeholder='Localidade' />     
           
           
           <TextInput style={styles.caixas} 
           value={ibge} 
           onChangeText={(texto) => setIbge(texto)}
           placeholder='Ibge' />    

            <TextInput style={styles.caixas} 
           value={complemento} 
           onChangeText={(texto) => setComplemento(texto)}
           placeholder='Complemento' />     

            
        </View>
        
          <View style={styles.v} >
          <TextInput  style={styles.uf}   
           value={uf} 
           onChangeText={(texto) => setUf(texto)}
           placeholder='UF' />


            <TextInput  style={styles.uf}   
           value={ddd} 
           onChangeText={(texto) => setDdd(texto)}
           placeholder='DDD' />

          </View>
      
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  nav: {  
   flexDirection: "row",
   height: 50,
    marginEnd: 20,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    height: 30,
  },
  cep: {
    flexDirection: "row",
    height: 50,
    marginHorizontal: 20,
    marginTop: 20,
    display: "flex",
    justifyContent:"center"
  },

  v: {
    flexDirection: "row",
    height: 50,
    marginHorizontal: 20,
    marginTop: 20,
    display: "flex",
    justifyContent:"center"

  },

 main:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
 },

  button: {
    borderColor: "red",
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    marginHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "red"

  },

  ButtonText:{
    color: "white"
    
  },

  input:{
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
  },

  caixas:{
    borderColor:"#000000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 20,
    marginEnd: 20,
    width: 150,
    justifyContent: "center",

  },
  uf:{
    justifyContent: "center",
    width: 50, 
    height: 50,
    marginTop: 10,
    marginEnd: 20,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
  }
});
