import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function ActivityScreen() {
  const [tab, setTab] = useState<"you" | "following">("you");
  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row justify-center mb-4">
        <TouchableOpacity onPress={() => setTab("you")} className="px-4 py-2">
          <Text className={`${tab === "you" ? "font-bold" : "text-gray-500"}`}>
            You
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("following")}
          className="px-4 py-2"
        >
          <Text
            className={`${tab === "following" ? "font-bold" : "text-gray-500"}`}
          >
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="py-2">
          <Text className="text-gray-700">(Demo activity items go here)</Text>
        </View>
      </ScrollView>
    </View>
  );
}
