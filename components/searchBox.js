import React from "react";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function searchBox(props) {
    const [text, setText] = useState('');
    const searchHandler = () => {
       const newData= props.data.filter(
            data => data.title.includes(text)
        )

        props.changeData(newData)
    }
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="search..." value={text} onChangeText={(newText) => setText(newText)} />
        <Button title="search" color="#ffb68d" onPress={searchHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: 'center'
  },
  searchInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    height: 40,
    borderRadius: 20,
    paddingLeft: 15
  },
});
