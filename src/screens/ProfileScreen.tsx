import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { demoUsers } from "../data/seed";
import PostCard from "../components/PostCard";

export default function ProfileScreen({ route, navigation }: any) {
  const isOther = route.params?.userId && route.params.userId !== "u1";
  const user = demoUsers[0];

  return (
    <ScrollView className="bg-white flex-1">
      <View className="p-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold">{user.name}</Text>
            <Text className="text-gray-500">@{user.username}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Text className="text-gray-500">⚙️</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: "https://picsum.photos/900/300" }}
          style={{ width: "100%", height: 200, marginTop: 16 }}
        />
        <Text className="mt-3 text-gray-700">{user.bio}</Text>
        {isOther ? (
          <TouchableOpacity
            className="mt-4 bg-accent py-2 rounded"
            onPress={() => {
              /* follow/unfollow */
            }}
          >
            <Text className="text-white text-center">Follow</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View className="p-3">
        <Text className="text-lg font-bold mb-3">Collections</Text>
        {/* Demo collection list */}
        <TouchableOpacity
          className="py-3 border-b"
          onPress={() =>
            navigation.navigate("Collection", { collectionId: "c1" })
          }
        >
          <Text>All</Text>
        </TouchableOpacity>
      </View>

      <View className="p-3">
        <Text className="text-lg font-bold mb-3">Posts</Text>
        <PostCard
          post={{
            id: "p1",
            image_url: "https://picsum.photos/800/1200?random=1",
            caption: "Demo",
            user_id: "u1",
          }}
          username={user.username}
          onLike={() => {}}
          onSave={() => {}}
        />
      </View>
    </ScrollView>
  );
}
