import React from 'react'
import { RightArrow } from '../../Icons'

export const Content = () => {
  return (
    <>
        <div className='Header'>
            <h1>Personalize<br />videos at scale</h1>
            <a className="BookButton">
                <span className="bg-h"></span>
                <span className="bg-h"></span>
                <span id="text">
                    book a demo
                    <RightArrow />
                </span>
            </a>
        </div>
        <div className="Body">
            <video src='https://www.sendpotion.com/assets/video/home/hero/1.mp4?6' autoPlay playsInline muted loop />
        </div>
        <div className="Footer"></div>
    </>
  )
}
