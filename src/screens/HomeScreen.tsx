import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import PostCard from "../components/PostCard";
import { demoPosts, demoUsers } from "../data/seed";
import type { Post } from "../types";

export default function HomeScreen({ navigation }: any) {
  const [mode, setMode] = useState<"explore" | "following">("explore");
  const [posts, setPosts] = useState<Post[]>(demoPosts);

  function handleLike(id: string) {
    setPosts((p) =>
      p.map((x) => (x.id === id ? { ...x, liked: !x.liked } : x))
    );
  }
  function handleSave(id: string) {
    navigation.navigate("SaveModal", { postId: id });
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-row p-3 justify-center">
        <TouchableOpacity
          onPress={() => setMode("following")}
          className="px-4 py-2"
        >
          <Text
            className={`text-base ${
              mode === "following" ? "font-bold" : "text-gray-500"
            }`}
          >
            Following
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMode("explore")}
          className="px-4 py-2"
        >
          <Text
            className={`text-base ${
              mode === "explore" ? "font-bold" : "text-gray-500"
            }`}
          >
            Explore
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {posts.map((post) => {
          const user = demoUsers.find((u) => u.id === post.user_id)!;
          return (
            <PostCard
              key={post.id}
              post={post}
              username={user.username}
              onLike={() => handleLike(post.id)}
              onSave={() => handleSave(post.id)}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}
