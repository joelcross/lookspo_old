import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function NewPostScreen({ navigation }: any) {
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });
    if (!result.cancelled) {
      navigation.navigate("HomeFeed", { newImage: result.uri });
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity
        className="bg-accent px-6 py-3 rounded"
        onPress={pickImage}
      >
        <Text className="text-white">Pick Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
