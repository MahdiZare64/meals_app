import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CategoryItem from "../components/mealCategoryItem";
import SeachBox from '../components/searchBox'

const categories = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(props.route.params.data)
  const navigateNext = (nextData) => {
    props.navigation.push("Details", {data: nextData});
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => setVisible(!visible)}
      onLongPress={() => setVisible(!visible)}
    >
      <View style={styles.container}>
      <SeachBox data={props.route.params.data} changeData={(d) => setData(d)} />
      
        <FlatList
          data={data}
          renderItem={(item) => (
            <CategoryItem
              title={item.item.title}
              description={item.item.description}
              image={item.item.image}
              onPress={() => navigateNext(item.item)}
              visible={visible}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

categories.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.route.params.categoryName,
  };
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    minHeight: Dimensions.get("screen").height,
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});

export default categories;
