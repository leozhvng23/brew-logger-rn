import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import BeansScreen from "./screens/BeansScreen";
import RecipesOverviewScreen from "./screens/RecipesOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {


	return (
		<View style={styles.rootContainer}>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerTransparent: true,
						headerStyle: {
							position: "absolute",
							backgroundColor: "transparent",
						},
						headerBlurEffect: true,
						headerTitleStyle: {},
						headerTintColor: "black",
						contentStyle: { backgroundColor: "#f0ddc4" },
					}}
				>
					<Stack.Screen
						name="Beans"
						component={BeansScreen}
						options={{ title: "All Beans" }}
					/>
					<Stack.Screen
						name="RecipesOverview"
						component={RecipesOverviewScreen}
						options={{ title: "Recipes" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
