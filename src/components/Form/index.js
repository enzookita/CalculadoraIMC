import React, {useState} from "react"
import { View , TextInput , Text , TouchableOpacity, Alert, Keyboard, Pressable, Vibration} from "react-native"
import ResultadoIMC from "./ResultadoIMC"
import styles from "./style"

export default function Form(){

const [height, setHeight] = useState(null);
const [weight, setWeight]= useState(null);
const [messageImc, setMessageImc]= useState("Preencha o Peso e Altura");
const [imc, setImc]= useState(null);
const [textButton, setTextButton]= useState("Calcular");
const [errorMessage, setErrorMessage] = useState();

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
    if (imc == null){
        Vibration.vibrate()
        Alert.alert("Valores Inválidos", "Preencha usando valores corretos");
        setErrorMessage("Campo Obrigatório*")
    }
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setWeight(null)
        setHeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
        return
    }
    verificationImc()
    setMessageImc("Preencha o Peso e Altura")
    setImc(null)
    setTextButton("Calcular")
    
}
    return(
        
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder = "Ex: 1.82"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder = "Ex: 80.20"
                keyboardType="numeric"/>
                <TouchableOpacity
                style={styles.buttonCalculator} 
                onPress={() => validationImc()}
                ><Text style={styles.textButtonCalculator}>
                    {textButton}
                    </Text></TouchableOpacity>
                    
            </View>
            <ResultadoIMC messageResultadoIMC={messageImc} resultadoIMC={imc}/>
        </Pressable>
    )
}