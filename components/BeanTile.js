import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const BeanTile = ({ name, imageUrl }) => {

	return (
		<View style={styles.gridItem}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
			>
				<View style={[styles.innerContainer, { backgroundColor: "rgb(243,234,180)" }]}>
					<Text style={styles.name}>{name}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default BeanTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});