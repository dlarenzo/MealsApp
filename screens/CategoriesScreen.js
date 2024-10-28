import { FlatList } from "react-native";
// the dummy data is imported to render the categories
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

// (HELPER FUNCTION) render out every category item
// Multiple threads can handle same function at the same time
function renderCategoryItem(itemData) {
  return (
    // pass the title and color of the category to the CategoryGridTile component
    // itemData.item is the item in the array
    // pass in color by itemData.item.color is the color of the category
    // pass in title itemData.item.title is the title of the category
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
    // render a list of categories using FlatList (which is a ScrollView with better performance)
    // data is the array of items to render so must use itemData.item to access the item
    <FlatList
      // data is the array of items to render and shows we are pulling from the CATEGORIES array
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      // numColumns is the number of columns to render
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
