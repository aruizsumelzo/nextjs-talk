import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    cache: "force-cache",
  });
  const post: Post = await res.json();
  if (!post) notFound();
  return post;
}

export async function generateStaticParams() {
  const posts = await fetch("https://api.vercel.app/blog", {
    cache: "force-cache",
  }).then((res) => res.json());
  return posts.map((post: Post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
  };
}

export default async function Page() {
  const post = await getPost("1");

  return (
    <article className="flex flex-col items-center justify-center h-screen px-4 bg-white">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">
        {post.title}
      </h1>

      <div className="text-gray-700 text-lg leading-relaxed max-w-3xl text-center mb-8">
        {post.content}
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
