import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const item = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(false), [props.visible]);

  return (
    <View style={{ ...styles.screen, marginBottom: visible ? -10 : 15 }}>
      <View style={styles.touchable}>
        <TouchableNativeFeedback
          activeOpacity={0.6}
          onPress={props.onPress}
          onLongPress={() => setVisible(true)}
        >
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{props.title}</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.subTitle}
              >
                {props.description}
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{ ...styles.underBox, height: visible ? 80 : 0 }}>
        <View style={styles.dFlex}>
          <Fontisto
            name="favorite"
            style={styles.icon}
            size={24}
            color="#ffd900"
          />
          <Text style={styles.boxText}>1024</Text>
        </View>
        <View style={styles.dFlex}>
          <Ionicons
            name="heart"
            style={styles.icon}
            size={24}
            color="#d40000"
          />
          <Text style={styles.boxText}>250</Text>
        </View>
        <View style={styles.dFlex}>
          <Ionicons name="eye" style={styles.icon} size={24} color="#0043d4" />
          <Text style={styles.boxText}>850</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  touchable: {
    borderRadius: 15,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    height: 80,
    borderRadius: 15,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 9,
    elevation: 5,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textWrapper: {
    flex: 1,
    padding: 10,
  },
  title: {
    direction: "rtl",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  subTitle: {
    color: "#6c757d",
    fontFamily: "open-sans",
  },
  underBox: {
    width: "100%",
    height: 0,
    top: -32,
    zIndex: -1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#fcfcfc",
    borderColor: "#eee",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  dFlex: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 5,
  },
  boxText: {
    fontFamily: "open-sans",
  },
});

export default item;
