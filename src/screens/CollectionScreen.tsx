import React from "react";
import { View, Text, ScrollView } from "react-native";
import { demoPosts, demoUsers } from "../data/seed";
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
        {demoPosts.map((post) => {
          const user = demoUsers.find((u) => u.id === post.user_id)!;

          return (
            <PostCard
              key={post.id}
              post={post}
              user={user}
              onLike={() => {}}
              onSave={() => {}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
