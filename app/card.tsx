'use client'

import Image from 'next/image'
import FancyButton from './Buttons/FancyButton'

import {useState, useEffect} from 'react'

type Props = {
    children?: React.ReactNode
    title: String,
    artist: String,
    album: String,
}

export default function Card({children, title, artist, album}: Props) {

    const [image, setImage] = useState('/fade_to_black.jpg')
    const [isLoading, setLoading] = useState(false)

    const BASE = 'https://ws.audioscrobbler.com/2.0' 
    const API_KEY = '7e39465e34f1025fe80caec6557291c7'
    const LINK = `${BASE}/?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json` 
    
    useEffect(() => {
        setLoading(true)
        fetch(LINK.replace(/ /g, "+"))
            .then((res) => res.json())
            .then((data) => {
                if (data.album.image) {
                    console.log(data)
                    setImage(data.album.image[5]['#text'])
                } else {
                    console.log(data)
                }
                setLoading(false)
            })
    }, [])
    

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center">
        <Image className="w-full flex justify-center" src={image} width={500} height={500} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-center">{title}</div>
            {/* <p className="text-gray-700 text-base">
            {artist}
            </p> */}
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{artist}</span> */}
            <FancyButton onClick={() => alert({artist}.artist)}>{artist}</FancyButton>
        </div>
        </div>
    )
}