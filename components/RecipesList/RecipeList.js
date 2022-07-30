import { StyleSheet, View, FlatList } from "react-native";

import { useHeaderHeight } from '@react-navigation/elements';
import RecipeItem from "./RecipeItem";

const RecipeList = ({items}) => {

    const headerHeight = useHeaderHeight();

    const renderRecipe = (data) => {
		const recipe = data.item;

		const recipeProps = {
			id: recipe.id,
			name: recipe.name,
			imageUrl: recipe.imageUrl,
			brewer: recipe.brewer,
			brewType: recipe.brewType,
			duration: recipe.duration,
		};

		return <RecipeItem {...recipeProps} />;
	};

	return (
		<View style={[styles.container]}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderRecipe}
				scrollsToTop
				contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: 50, paddingHorizontal: "3%"}}
			/>
		</View>
	);
};

export default RecipeList;

const styles = StyleSheet.create({
    container: {
		flex: 1,
	},
});