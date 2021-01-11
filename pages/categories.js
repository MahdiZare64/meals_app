import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SeachBox from "../components/searchBox";

import CategoryItem from "../components/categoryItem";

import data from "../data/categories";

const categories = (props) => {
  const [listData, setListData] = useState(data);

  const navigateNext = (title, list) => {
    props.navigation.push("MealCategories", {
      categorytitle: title,
      data: list,
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <SeachBox data={listData} changeData={(d) => setListData(d)} />
        <FlatList
          contentContainerStyle={styles.grid}
          numColumns={2}
          data={listData}
          keyExtractor={(item, index) => String(index)}
          renderItem={(item) => {
            return (
              <CategoryItem
                source={item.item.source}
                color={item.item.color}
                onPress={() => navigateNext(item.item.title, item.item.list)}
              >
                <Text style={styles.cardText}>{item.item.title}</Text>
              </CategoryItem>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
    fontFamily: "open-sans-bold",
  },
  grid: {
    alignItems: "center",
  },
});

export default categories;
