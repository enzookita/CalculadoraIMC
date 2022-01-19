import React from "react"
import {Text, TextInput, View, Share} from "react-native"
import { TouchableOpacity } from "react-native"
import Form from ".."
import styles from "./style"
export default function ResultadoIMC(props){

    const onShare = async() => {
        const result = await Share.share({
            message: "Meu IMC é: "+props.resultadoIMC
        })
    }
        
    
    return(
        <View style={styles.contextImc}>
            <View style={styles.boxSharebutton}>
                {props.resultadoIMC != null ?
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.textStyle}>Compartilhar</Text>
                </TouchableOpacity>
                :
            <View/>
                }
            </View>
            <Text style={styles.information}>{props.messageResultadoIMC}</Text>
            <Text  style={styles.numberImc}>{props.resultadoIMC}</Text>
        </View>
    )}
                
