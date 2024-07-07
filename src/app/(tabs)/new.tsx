import React from "react";
import { Button, Image, Pressable, Text, TextInput, View } from "react-native";

export default function CreatePost() {
  const [caption, setCaption] = React.useState("");

  const createPost = async () => {};

  return (
    <View className="p-3 items-center flex-1 bg-white">
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg"
      />

      <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="What is on your mind"
        placeholderTextColor={"gray"}
        className="w-full p-3 border border-gray-200 rounded-md mt-5"
        numberOfLines={5}
      />

      {/* Button */}
      <View className="mt-auto w-full">
        <Button title="Share" onPress={createPost} />
      </View>
    </View>
  );
}
