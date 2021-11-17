import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["Developer"],
        })
    }, [])
    return (
        <div className="contact" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="#" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>David Romero</h1>
                    <h3>Full-stack <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
