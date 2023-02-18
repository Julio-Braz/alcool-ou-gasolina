import React from "react";
import { View, Text} from "react-native";
import styles from "./styles";


export default function ResultGasouAlc({messageResultGasouAlc, resultGasouAlc}) {
    return(
<View style={styles.resultAlcOuGas}>
    <Text style={styles.information}>{messageResultGasouAlc}</Text>
    <Text style={styles.resultadoFinal}>{resultGasouAlc}</Text>  
</View>
    );
}


