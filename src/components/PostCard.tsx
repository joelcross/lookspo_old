import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import type { Post } from "../types";
import Icon from "react-native-vector-icons/Feather";

export default function PostCard({
  post,
  onLike,
  onSave,
  username,
}: {
  post: Post;
  onLike: () => void;
  onSave: () => void;
  username: string;
}) {
  return (
    <View className="mb-6">
      <View className="relative">
        <Image
          source={{ uri: post.image_url }}
          style={{ width: "100%", height: 500 }}
          className="rounded-none"
        />
        <View
          className="absolute left-3 bottom-8 px-2 py-1 rounded"
          style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
        >
          <Text className="text-white font-bold">{username}</Text>
        </View>
      </View>
      <View className="flex-row items-center px-3 py-2">
        <TouchableOpacity onPress={onLike} className="mr-4">
          <Icon
            name={post.liked ? "heart" : "heart"}
            size={24}
            color={post.liked ? "#ef4444" : "#111827"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave}>
          <Icon
            name={post.saved ? "check" : "plus"}
            size={22}
            color="#111827"
          />
        </TouchableOpacity>
      </View>
      <View className="px-3">
        {post.caption ? (
          <Text className="text-sm text-gray-700">{post.caption}</Text>
        ) : null}
      </View>
    </View>
  );
}
