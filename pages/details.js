import React, {useState} from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const categories = (props) => {
  const [data] = useState(props.route.params.data);
  return (
    <View style={styles.container}>
          <Image resizeMode="cover" source={{uri: data.image}} style={styles.image} />
      <ScrollView >

          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.details}>
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
              <Ionicons
                name="eye"
                style={styles.icon}
                size={24}
                color="#0043d4"
              />
              <Text style={styles.boxText}>850</Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.text}>{data.description}</Text>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    zIndex: -1
  },
  title: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 20,
    fontFamily: "open-sans-bold",
    backgroundColor: "white",
  },
  details: {
    width: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "white",
    borderColor: "#eee",
    borderWidth: 1,
    borderTopWidth: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 10,
    paddingTop: 10,
  },
  dFlex: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 5,
  },
  description: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "open-sans",
  },
  scroll: {
      flex: 1,
  },
  container: {
      flex: 1
  }
});
export default categories;
