import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './style.module.css'

// Components
import VideoPlayerActions from './videoPlayerActions.jsx'

export default function VideoPlayer ({ src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: elVideo } = video

    playing
      ? elVideo.pause()
      : elVideo.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <button className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
    </div>
  )
}
