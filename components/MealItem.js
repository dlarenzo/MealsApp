import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import {} from "@react-navigation/native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
});
