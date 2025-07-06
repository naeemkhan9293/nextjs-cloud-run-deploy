"use client";
import PostCard from "@/components/PostCard";

export default function Post() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post Page</h1>
      <PostCard
        post={{
          id: 1,
          title: "Sample Post",
          content: "This is a sample post content.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Actions />
      </PostCard>
    </div>
  );
}
