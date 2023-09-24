import Image from 'next/image'
const fetchComentarios = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
    .then(res => res.json())
}

export default async function Comentarios ({ params }) {
  const { id } = params
  const comentarios = await fetchComentarios(id)
  return (
    <ul style={{ background: '#444' }}>
      {comentarios.map(comentario => (
        <li key={comentario.id}>
          <Image src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comentario.email}.svg`} alt={comentario.name} width={40} height={40} />
          <h3>{comentario.name}</h3>
          <small>{comentario.body}</small>
        </li>
      ))}
    </ul>
  )
}
