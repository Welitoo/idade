import React, {useState} from "react";  

import {View, 
        Text,
        TextInput,
        StyleSheet,
        TouchableOpacity,
     } from 'react-native';


     export default function Idade(){

        let [atual,setAtual] = useState();
        let [anonsc,setAnonsc] = useState();
        let [total, setTotal] = useState();

            function CalcularTotal(){
                let resultado =  parseFloat(atual) - parseFloat(anonsc);
                setTotal(resultado);

                alert("Sua idade ou da pessoa é: " + total + " anos");

            }
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Idade</Text>

                <TextInput onChangeText={setAtual} style={styles.campo} placeholder="Digite o ano em que estamos" />

                <TextInput onChangeText={setAnonsc} style={styles.campo} placeholder="Digite o ano que você nasceu" />

                <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                    <Text style={styles.botaoTexto}>Calcular</Text>
                </TouchableOpacity>
            </View> 
        );
     }

     const styles = StyleSheet.create({
            container: { 
            backgroundColor: '#3B3936',
            flex: 1,  
            justifyContent: 'center',
            alignItems: 'center',
     },

     titulo: { 
        fontSize: 25,
        color: '#FFF',
        fontWeight:'bold',
        marginBottom:40
     },

     campo:{
        backgroundColor: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        marginBottom:10,
        borderRadius: 10
     },

     botao:{
        backgroundColor: 'red',
        alignItems: "center",
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
     },

     botaoTexto:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: "700",
     }
    });