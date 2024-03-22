import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./../screens/WelcomeScreen";
import HomeScreen from "./../screens/HomeScreen";
import SearchScreen from "./../screens/SearchScreen";
import SavedScreen from "./../screens/SavedScreen";
// expo  vector icons
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
	function HomeStack() {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="Home"
			>
				<Stack.Screen name="HomeTab" component={HomeTabs} />
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
			</Stack.Navigator>
		);
	}

	const screenOptionsIcons = {
		tabBarShowLabel: false,
		headerShown: false,
		tabBarStyle: {
			position: "absolute",
			bottom: 0,
			right: 0,
			left: 0,
			elevation: 0,
			height: 60,
			background: "#fff",
		},
	};

	function HomeTabs() {
		return (
			<Tab.Navigator screenOptions={screenOptionsIcons}>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}
								>
									<Entypo
										name="home"
										size={24}
										color={focused ? "red" : "#16247d"}
									/>
									<Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}
								>
									<FontAwesome
										name="search"
										size={24}
										color={focused ? "red" : "#16247d"}
									/>
									<Text style={{ fontSize: 12, color: "#16247d" }}>Search</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Saved"
					component={SavedScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}
								>
									<AntDesign
										name="heart"
										size={24}
										color={focused ? "red" : "#16247d"}
									/>
									<Text style={{ fontSize: 12, color: "#16247d" }}>Saved</Text>
								</View>
							);
						},
					}}
				/>
			</Tab.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<HomeStack />
		</NavigationContainer>
	);
}
