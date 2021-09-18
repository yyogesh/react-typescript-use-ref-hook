import React, { RefObject } from 'react'

type ControlsProps = {
    audioPlayer: RefObject<HTMLAudioElement | null>
}

const Controls = ({ audioPlayer }: ControlsProps) => {
    const jump10Seconds = () => {
        if (audioPlayer && audioPlayer.current) {
            audioPlayer.current.currentTime += 10;
        }
    }
    return (
        <div>
            <button onClick={() => jump10Seconds()}>Jump</button>
        </div >
    )
}

export default Controls
