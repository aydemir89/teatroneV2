import React from 'react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import { FaPlay } from 'react-icons/fa'
import {
    CheckIcon,
    PlusIcon,
    ThumbUpIcon,
    VolumeOffIcon,
    VolumeUpIcon,
    XIcon,
} from '@heroicons/react/outline'
import { Element, Genre, Movie } from '../typings'
import MuiModal from '@mui/material/Modal'
import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    onSnapshot,
    setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'
import Modal from "./Modal";


function Watch() {
    const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
    const [movie, setMovie] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState('')
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [muted, setMuted] = useState(true)
    const [genres, setGenres] = useState<Genre[]>([])
    const [addedToList, setAddedToList] = useState(false)
    const { user } = useAuth()
    const [movies, setMovies] = useState<DocumentData[] | Movie[]>([])
    useEffect(() => {
        if (!movie) return

        async function fetchMovie() {
            const data = await fetch(
                `https://api.themoviedb.org/3/${
                    movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=${
                    process.env.NEXT_PUBLIC_API_KEY
                }&language=en-US&append_to_response=videos`
            ).then((response) => response.json())
            if (data?.videos) {
                const index = data.videos.results.findIndex(
                    (element: Element) => element.type === 'Trailer'
                )
                setTrailer(data.videos?.results[index]?.key)
            }
            if (data?.genres) {
                setGenres(data.genres)
            }
        }

        fetchMovie()
    }, [movie])


    return (
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: '0', left: '0' }}
                playing
            />
    )
}
export default Watch