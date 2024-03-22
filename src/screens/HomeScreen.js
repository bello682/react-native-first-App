import { View, Text, Image } from "react-native";
import React from "react";

export default function HomeScreen() {
	return (
		<View className="flex-1">
			<Image source={require("../../assets/images/pexels-bri-schneiter.jpg")} />
			<Text>HomeScreen</Text>
		</View>
	);
}
