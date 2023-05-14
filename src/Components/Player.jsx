import { Box, HStack, Text, VStack, Progress } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsSkipForwardCircle,
  BsSkipBackwardCircle,
} from "react-icons/bs";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
import { songsdata } from "../audio";

const Player = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);
  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };
  const setPlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipPrev = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
    setIsPlaying(false);
  };

  const skipNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
    setIsPlaying(false);
  };

  const skipforward = () => {
    audioElem.current.currentTime += 15;
  };

  const skipBack = () => {
    audioElem.current.currentTime -= 15;
  };
  return (
    <div style={{ paddingTop: "90px" }}>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Box
        w={"390px"}
        h={"894px"}
        m={"auto"}
        p={"10px"}
        pt={"20px"}
        bgColor={"black"}
      >
        <VStack spacing={"30px"}>
          <Box
            h={"150px"}
            w={"150px"}
            bgColor={currentSong.color}
            m={"auto"}
            padding={"10px"}
            borderRadius={"5px"}
          >
            {" "}
          </Box>
          <Text color={"white"} textAlign={"center"}>
            {currentSong.title}
          </Text>
          <Progress value={80} />
        </VStack>
        <Progress
          size="sm"
          mt={"10px"}
          mb={"20px"}
          value={currentSong.progress}
        />
        <HStack m={"auto"} p={"10px"} w={"70%"}>
          <BiSkipPreviousCircle
            color="white"
            size={"45px"}
            onClick={skipPrev}
          />
          <BsSkipBackwardCircle
            color="white"
            size={"35px"}
            onClick={skipBack}
          />
          {isPlaying ? (
            <BsFillPauseCircleFill
              color="white"
              size={"45px"}
              onClick={setPlayPause}
            />
          ) : (
            <BsFillPlayCircleFill
              color="white"
              size={"45px"}
              onClick={setPlayPause}
            />
          )}
          <BsSkipForwardCircle
            color="white"
            size={"35px"}
            onClick={skipforward}
          />

          <BiSkipNextCircle color="white" size={"45px"} onClick={skipNext} />
        </HStack>
      </Box>
    </div>
  );
};

export default Player;
