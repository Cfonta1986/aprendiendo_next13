import { LikeButton } from '../componentes/LikeButton'
import Link from 'next/link'
const FetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(response => response.json())
}

export default async function ListOfPosts () {
  const posts = await FetchPosts()
  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
        <h2 style={{ color: 'red' }}>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton />
    </article>
  ))
}
