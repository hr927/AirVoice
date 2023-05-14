import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { songsdata } from "../audio";

const Home = () => {
  const songs = songsdata;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div style={{ paddingTop: "90px" }}>
      <Box w={"390px"} m={"auto"} p={"10px"} bgColor={"black"}>
        <VStack>
          <HStack>
            <Text fontSize="3xl" fontWeight="extrabold" color={"white"}>
              Hi
            </Text>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              Himanshu
            </Text>
            <Text fontSize="3xl">👋</Text>
            <Spacer />
            <Image
              src="https://avatars.githubusercontent.com/u/64404614?v=4"
              alt="Himanshu"
              borderRadius={"50%"}
              w={"70px"}
            />
          </HStack>
          <Box alignSelf={"flex-start"} pl={"20px"}>
            <Text color={"grey"}>It’s a nice day to learn something new</Text>
          </Box>
          <HStack bgColor={"#202022"} padding={"10px"}>
            <Text color={"grey"} fontSize={"15px"}>
              Join and help us in building Airvoice!
            </Text>
            <Button colorScheme="whatsapp">Community</Button>
          </HStack>
          <Box textAlign={"left"}>
            <Text color={"white"} fontSize={"20px"}>
              Courses for you
            </Text>
            <Text color={"grey"}>
              Listen to byte-sized audio courses from top thinkers
            </Text>
          </Box>
        </VStack>
        <Carousel responsive={responsive}>
          {songs.map((el) => {
            return (
              <Box bgColor={"inherit"} p={"10px"}>
                <Box
                  h={"150px"}
                  w={"150px"}
                  bgColor={el.color}
                  m={"auto"}
                  padding={"10px"}
                  borderRadius={"5px"}
                >
                  {" "}
                </Box>
                <Text color={"white"} textAlign={"center"}>
                  {el.title}
                </Text>
              </Box>
            );
          })}
        </Carousel>
        <Box textAlign={"left"}>
          <Text color={"white"} fontSize={"20px"}>
            Article Reads
          </Text>
          <Text color={"grey"}>
            Listen to audio versions of top web articles
          </Text>
        </Box>
        <Carousel responsive={responsive}>
          {songs.map((el) => {
            return (
              <Box bgColor={"inherit"} p={"10px"}>
                <Box
                  h={"150px"}
                  w={"150px"}
                  bgColor={el.color}
                  m={"auto"}
                  padding={"10px"}
                  borderRadius={"5px"}
                >
                  {" "}
                </Box>
                <Text color={"white"} textAlign={"center"}>
                  {el.title}
                </Text>
              </Box>
            );
          })}
        </Carousel>
        <Box textAlign={"left"}>
          <Text color={"white"} fontSize={"20px"}>
            Tweet Shorts
          </Text>
          <Text color={"grey"}>Listen to audio versions of tweet threads</Text>
        </Box>
        <Carousel responsive={responsive}>
          {songs.map((el) => {
            return (
              <Box bgColor={"inherit"} p={"10px"}>
                <Box
                  h={"150px"}
                  w={"150px"}
                  bgColor={el.color}
                  m={"auto"}
                  padding={"10px"}
                  borderRadius={"5px"}
                >
                  {" "}
                </Box>
                <Text color={"white"} textAlign={"center"}>
                  {el.title}
                </Text>
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </div>
  );
};

export default Home;
