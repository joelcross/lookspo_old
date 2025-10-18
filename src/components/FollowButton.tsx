import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

export default function FollowButton({
  initial = false,
  onToggle,
}: {
  initial?: boolean;
  onToggle?: (v: boolean) => void;
}) {
  const [following, setFollowing] = useState(initial);
  return (
    <TouchableOpacity
      className={`py-2 px-4 rounded ${following ? "bg-accent" : "border"}`}
      onPress={() => {
        setFollowing((v) => {
          const nv = !v;
          onToggle?.(nv);
          return nv;
        });
      }}
    >
      <Text className={`text-sm ${following ? "text-white" : "text-black"}`}>
        {following ? "Following" : "Follow"}
      </Text>
    </TouchableOpacity>
  );
}
