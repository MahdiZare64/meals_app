import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function contactItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {props.icon}
        <Text style={{marginLeft: 5}}>{props.title}</Text>
      </View>
      <Text>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: "100%",
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: 'center',
  },
});
