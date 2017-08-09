
import React from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

export default class App extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.splash}>
                    <Image source={require('./images/hamburger.png')} style={{height: 150, width: 150}} />
                </View>
                <View style={styles.loginBox}>
                    {/*<Button style={styles.btnPrimary} title={'Noms!'} />*/}
                    <Text style={styles.comingSoon}>Noms Coming Soon!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    splash: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 5
    },
    loginBox: {
        alignItems: 'center',
        backgroundColor: 'skyblue',
        flex: 2,
        justifyContent: 'center',
        padding: 30,
        width: '100%'
    },
    btnPrimary: {
        backgroundColor: 'red',
        color: 'white'
    },
    comingSoon: {
        color: 'white',
        fontSize: 32
    }
});
