import { StyleSheet, Text, View } from "react-native";

import AttributeItem from "./RecipeDetail/AttributeItem";
import { formatBrewTime } from "../util/time";

// type = {selectedRecipe.type}
// 					yield = {selectedRecipe.yield}
// 					brew_time = {selectedRecipe.brew_time}
// 					bean_name = {selectedRecipe.bean_name}
// 					bid = {selectedRecipe.bid}
// 					created_on = {selectedRecipe.created_on}
// 					brewer = {selectedRecipe.brewer}
// 					grinder = {selectedRecipe.grinder}

const RecipeDetailsFull = (props) => {
	const {
		type,
		yields,
		brew_time,
		bean_name,
		bid,
		user_name,
		uid,
		created_on,
		brewer,
		grinder,
    brewer_eid,
    grinder_eid
	} = props;

	return (
		<View style={styles.details}>
			<AttributeItem data={user_name} id={uid} style={styles.detailItem} />
			<AttributeItem data={type} style={styles.detailItem} />
			<AttributeItem data={formatBrewTime(brew_time)} style={styles.detailItem} />
			<AttributeItem data={bean_name} id={bid} style={styles.detailItem} />
			<AttributeItem data={brewer} id={brewer_eid} style={styles.detailItem} />
			<AttributeItem data={grinder} id={grinder_eid} style={styles.detailItem} />
      <AttributeItem data={yields} style={styles.detailItem} />
		</View>
	);
};

export default RecipeDetailsFull;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		padding: 8,
	},
	detailItem: {
		margin: 5,
	},
});