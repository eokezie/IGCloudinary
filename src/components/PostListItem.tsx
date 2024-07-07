import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import React from "react";

type PostListType = {
  post: {
    id: string;
    image: string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
  };
};
const PostListItem: React.FC<PostListType> = ({ post }) => {
  return (
    <View className="bg-white flex-1">
      <View className="p-2 flex-row items-center gap-5">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-14 aspect-square rounded-full"
        />
        <Text className="text-xl font-semibold">{post.user.username}</Text>
      </View>
      <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-square"
      />
      <View className="flex-row gap-3 p-4 px-5">
        <AntDesign name="hearto" size={22} />
        <Ionicons name="chatbubble-outline" size={22} />
        <Feather name="send" size={22} />

        <Feather name="bookmark" size={22} className="ml-auto" />
      </View>
    </View>
  );
};

export default PostListItem;

const styles = StyleSheet.create({});
