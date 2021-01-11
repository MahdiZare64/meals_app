import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const width = Dimensions.get("screen").width;

const CategoryItem = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: width * 0.5 - 20,
      height: width * 0.5 - 20,
      overflow: "hidden",
      backgroundColor: "black",
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    image: {
      width: width * 0.5 - 20,
      height: width * 0.5 - 20,
    },
    bottom: {
      backgroundColor: props.color,
      height: 40,
      width: "100%",
      position: "absolute",
      bottom: 0,
      borderTopRightRadius: 40,
    },
    over: {
      position: "absolute",
      bottom: 40,
      height: width * 0.5 - 40,
      width: "100%",
      overflow: "hidden",
      borderBottomLeftRadius: 50,
      overflow: "hidden",
      zIndex: 9,
    },
    top: {
      backgroundColor: props.color,
      position: "absolute",
      bottom: 40,
      width: "100%",
      height: 40,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.over}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={props.source}
          />
        </View>
        <View style={styles.top}></View>
        <View style={styles.bottom}>{props.children ?? <View></View>}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CategoryItem;
