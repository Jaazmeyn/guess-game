import { Text, StyleSheet, View } from 'react-native';

function GameScreen() {
    return <View style={styles.screen}>
        <Text style={styles.title}>Opponent's Guess</Text>
        {/* GUESS */}
        <View>
            <Text>Higher or lower</Text>
            {/* +
            - */}
        </View>
        <View>
            {/* LOG ROUNDS */}
        </View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 42
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 1
    }


})