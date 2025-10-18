import React, { useState } from "react";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";

export default function SaveModal({ route, navigation }: any) {
  const { postId } = route.params;
  const [newCollection, setNewCollection] = useState("");

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-bold mb-4">Save to collection</Text>
      {/* Placeholder: list user's collections here */}
      <View className="mb-4">
        <TextInput
          placeholder="Create new collection"
          value={newCollection}
          onChangeText={setNewCollection}
          className="border px-3 py-2"
        />
        <TouchableOpacity
          className="mt-2 bg-accent py-2 rounded"
          onPress={() => {
            /* create collection */
          }}
        >
          <Text className="text-white text-center">Create</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mt-4" onPress={() => navigation.goBack()}>
        <Text className="text-center text-gray-600">Close</Text>
      </TouchableOpacity>
    </View>
  );
}
