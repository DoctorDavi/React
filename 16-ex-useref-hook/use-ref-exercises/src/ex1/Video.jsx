import { useRef } from "react";
import monkeyImg from "../assets/Task.mp4";

function Video() {
  const videoRef = useRef(null);

  function enter() {
    videoRef.current.play();
  }

  function leave() {
    videoRef.current.pause();
  }

  return (
    <video
      ref={videoRef}
      src={monkeyImg}
      onMouseEnter={enter}
      onMouseLeave={leave}
    ></video>
  );
}

export default Video;
