import {Link} from 'react-router-dom';

export default function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}/>
    </article>
  )
}

