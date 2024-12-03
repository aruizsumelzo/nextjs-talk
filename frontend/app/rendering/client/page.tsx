"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });
  const post: Post = await res.json();
  if (!post) notFound();
  return post;
}

export default function Page() {
  const [post, setPost] = useState<Post>({
    title: "",
    body: "",
    id: 0,
    userId: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const fetched = await getPost(1);
      setPost(fetched);
    };

    fetch();
  }, []);

  return (
    <article className="flex flex-col items-center justify-center h-screen px-4 bg-white">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">
        {post.title}
      </h1>

      <div className="text-gray-700 text-lg leading-relaxed max-w-3xl text-center mb-8">
        {post.body}
      </div>

      <Button
        asChild
        className="bg-black text-white hover:bg-gray-900 px-6 py-3 rounded-md"
      >
        <Link href="/rendering" passHref>
          Volver
        </Link>
      </Button>
    </article>
  );
}
