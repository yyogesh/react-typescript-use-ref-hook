import { forwardRef } from "react";

type PlayerProps = {
    src: string
}

const Player = forwardRef<HTMLAudioElement, PlayerProps>(({ src }, ref) => {
    return (
        <audio src={src} ref={ref}>
            This browser does not support.
        </audio>
    )
})

export default Player;