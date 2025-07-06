"use client";

import React, { PropsWithChildren } from "react";

type PostCardContext = {
  post: Post;
};

const PostCardContext = React.createContext<PostCardContext | undefined>(
  undefined
);

export function usePostCard() {
  const context = React.useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCard must be used within a PostCardProvider");
  }
  return context;
}

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardProps = PropsWithChildren & {
  post: Post;
};

export default function PostCard({ children, post }: PostCardProps) {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex w-[300px] flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        {children}
      </div>
    </PostCardContext.Provider>
  );
}

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCard();
  return <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCard();
  return <p className="text-gray-600">{post.content}</p>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCard();
  return (
    <div className="mt-2 flex items-center gap-2">
      <span className="text-sm text-gray-500">Posted by</span>
      <span className="font-medium text-gray-700">{post.user.name}</span>
    </div>
  );
};

PostCard.Actions = function PostCardActions() {
  return (
    <div className="mt-4 flex justify-end gap-2">
      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Edit
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
        Delete
      </button>
    </div>
  );
};
