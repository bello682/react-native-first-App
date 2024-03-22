import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
	const Navigation = useNavigation();
	return (
		// color== bg-orange-500
		<View className=" flex-1 justify-end items-center space-y-10 relative">
			<StatusBar stytle="light" />
			<Image
				source={require("../../assets/images/graphic 2.jpg")}
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
				}}
				resizeMode="cover"
			/>

			<View className="flex items-center justify-center py-28 max-w-[80%]">
				<View className="bg-red-600 p-4 rounded-3xl">
					<Text className="text-white text-4xl font-extrabold tracking-widest my-4">
						MC
					</Text>
				</View>
				<Text className="text-white text-4xl font-bold tracking-widest my-4">
					Movie Cinema
				</Text>

				<Text className="text-white tracking-widest mb-2 text-lg text-center font-medium">
					Watch and find movies that brings your mood back.
				</Text>
			</View>

			<View className="my-4 mb-36">
				<TouchableOpacity
					className="bg-red-600 px-12 py-3 rounded-lg"
					onPress={() => Navigation.navigate("HomeTab")}
				>
					<Text className="text-white text-lg font-medium ">Explore</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
