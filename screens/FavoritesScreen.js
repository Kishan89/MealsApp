//import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.msg}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f2f25",
  },
  msg: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
