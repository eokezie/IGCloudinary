import { FlatList } from "react-native";

import posts from "../../assets/posts.json";
import PostListItem from "../../components/PostListItem";

const post1 = posts[0];

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        alignSelf: "center",
        width: "100%",
      }}
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      // onRefresh={fetchPosts}
      // refreshing={loading}
    />
  );
}
