import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../store/modalReducer'
import { setMovie } from '../store/movieReducer'
import { Movie } from '../typings'

interface Props {
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  const dispatch = useDispatch()

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
     
      onClick={() => {
        dispatch(setMovie(movie))
        dispatch(setModal(true))
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
