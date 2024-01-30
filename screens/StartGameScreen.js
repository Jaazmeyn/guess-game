import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        //update enterednumberstate
        setEnteredNumber(enteredText); // enteredText is from TextInput automatically
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if ( isNaN(chosenNumber) 
            || chosenNumber <= 0 
            || chosenNumber > 99) {
                Alert.alert('Invalid number', 
                    'Number has to be between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]    
        );
            return;
        }
        onPickNumber(chosenNumber); // if valide number -> forward number to App.js
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad" //cross plattform -> look doc
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}
export default StartGameScreen;



const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop:100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4, // android only shadow
        shadowColor: 'black', // ios
        shadowOffset: { width: 2, height: 2 }, // ios
        shadowRadius: 6, // ios
        shadowOpacity: 0.25, // ios
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection:'row'
    },
    buttonContainer: {
        flex: 1,
        flexDirection:'column'
    }
});