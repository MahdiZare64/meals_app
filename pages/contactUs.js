import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from '../components/contactItem'
import { Entypo } from '@expo/vector-icons';

const categories= props =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>contact us</Text>
            <View style={styles.items}>
            <Item title="phone number" content='+1 555-4443333' icon={ <Entypo name="phone" size={24} color="black" />} />
            <Item title="email" content='test@example.com' icon={ <Entypo name="email" size={24} color="black" />} />
            <Item title="phone" content='+1 555-4443333' icon={ <Entypo name="old-phone" size={24} color="black" />} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 30,
    },
    items: {
        width: '90%'
    }
})

export default categories