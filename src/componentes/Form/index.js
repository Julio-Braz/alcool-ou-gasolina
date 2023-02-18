import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity,Vibration,Pressable, Keyboard }  from "react-native";
import ResultGasouAlc from "./ResultGasouAlc";
import styles from "./styles";


export default function Form (){
    
    const [precoGasolina, setPrecoGasolina] = useState(null)
    const [precoAlcool, setPrecoAlcool] = useState(null)
    const [gasouAlc, setMessageGasouAlc] = useState("Preencha o preço do Alcool e Gasolina")
    const [maisBarato, setmaisBarato] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function combustivelCalcular (){
        let alcoolFormat = precoAlcool.replace(',','.')
        let gasolinaFormat = precoGasolina.replace(',','.')
              
        let regraCalculo = (alcoolFormat / gasolinaFormat)
            regraCalculo < 0.7 ? regraCalculo='Alcool':regraCalculo='Gasolina'
            return setmaisBarato(regraCalculo)
    }

    function verification (){
        if(maisBarato === null){
            Vibration.vibrate();
             setErrorMessage('*campo obrigatório*')
        }

    }
    function validacao () {
        if(precoGasolina != null & precoAlcool != null){
            combustivelCalcular()
            setPrecoGasolina(null)
            setPrecoAlcool(null)
            setMessageGasouAlc('Vale mais a pena abastecer com: ')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
            Keyboard.dismiss()
        }
        else{
        verification()
        setmaisBarato(null)
        setTextButton('Calcular')
        setMessageGasouAlc("Preencha o preço do alcool e da gasolina")
    }
}
    
    return(

    <View  style={styles.formContext}>
        {maisBarato == null?
    <Pressable onPress={Keyboard.dismiss} style={styles.form}>
        <Text style={styles.formLabel}>Preço do Alcool</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
        style={styles.input}
        onChangeText={setPrecoAlcool}
        value={precoAlcool}
        placeholder="Ex. 5.20"
        keyboardType="numeric"
        ></TextInput>
        <Text  style={styles.formLabel}>Preço da Gasolina</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
        style={styles.input}
        onChangeText={setPrecoGasolina}
        value={precoGasolina}
        placeholder="Ex. 7.20"
        keyboardType="numeric"
        ></TextInput>
        <TouchableOpacity
        style={styles.buttonCalc}
        onPress={() =>{validacao()
        }}
        >
            <Text style={styles.textButtonCalc}>{textButton}</Text>
        </TouchableOpacity>
        </Pressable>
    : 
    <View style={styles.exibitionResult}>
        <ResultGasouAlc messageResultGasouAlc={gasouAlc} resultGasouAlc={maisBarato}/>
        <TouchableOpacity
        style={styles.buttonCalc}
        onPress={() =>{validacao()
        }}
        >
            <Text style={styles.textButtonCalc}>{textButton}</Text>
        </TouchableOpacity>
    </View>
    }
    </View>
    );
}

/* function ResultGasouAlc(props) {
    return(
<View>
    <Text>{props.messageResultGasouAlc}</Text>
    <Text>{props.resultGasouAlc}</Text>  
</View>
    );
} */