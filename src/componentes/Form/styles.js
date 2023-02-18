import { StyleSheet, TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height:'100%',
        alignItems: 'center',
        marginTop: 30,
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:'#ffffff',
        
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel :{
        color: '#040329',
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width:'90%',
        borderRadius: 50,
        backgroundColor:'#f6f6f6',
        height:40,
        margin:14,
        paddingLeft:10,

    },
    buttonCalc:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent:'center',
        width: '90%',
        backgroundColor:'#040329',
        paddingTop: 14,
        paddingBottom:14,
        marginLeft: 15,
        margin: 30,
    
    },
    textButtonCalc:{
        fontSize:20,
        color: 'white',
    },
    errorMessage:{
        fontSize:12,
        color:'red',
        fontWeight:'bold',
        paddingLeft:20,
    },
    exibitionResult:{
        width: '100%',
        height: '50%',
    }
    
  });


export default styles