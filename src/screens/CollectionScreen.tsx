import React from "react";
import { View, Text, ScrollView } from "react-native";
import { demoPosts } from "../data/seed";
import PostCard from "../components/PostCard";

export default function CollectionScreen({ route }: any) {
  const { collectionId } = route.params || {};
  // For demo, show all posts
  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-xl font-bold">Collection</Text>
      </View>
      <ScrollView>
        {demoPosts.map((p) => (
          <PostCard
            key={p.id}
            post={p}
            username={"noirmoth"}
            onLike={() => {}}
            onSave={() => {}}
          />
        ))}
      </ScrollView>
    </View>
  );
}
