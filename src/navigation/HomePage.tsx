import React from "react";
import hpVideo from "../imagesAndVideos/hpVideo.mp4";
import sushi1 from "../imagesAndVideos/sushi-1.png";
import eatSushi from "../imagesAndVideos/eatSushi.png";
import { motion } from "framer-motion";
import "../App.css";
/**
 * Div will contain an image and quote to the left
 * Div will contain image on the right and quote to the left
 * @returns jsx
 */
export default function HomePage() {
  return (
    <div className="bg-emerald-950 text-stone-100">
      <div className="flex justify-center">
        <div className="flex h-fill relative w-[95%] translate-y-6">
          <video src={hpVideo} autoPlay loop muted className="rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.p
              className="text-[20px] md:text-[100px]"
              initial={{ y: `-100vh` }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 300 }}
            >
              Dinner for two
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        className=" flex justify-evenly mt-36"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-row space-x-5 items-center ">
          <div>
            <img src={sushi1} className="h-96 w-auto" />
          </div>
          <div>
            <p className="md:text-4xl text-center">
              "The best sushi I've had in New Jersey"
              <br />
              R. Greene
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-evenly mt-36 pb-8"
        initial={{ x: "-100vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row space-x-5 items-center">
          <div>
            <p className="md:text-4xl text-center">
              "I can tell that the food is fresh"
              <br />
              R. Nwambuo
            </p>
          </div>
          <div>
            <img src={eatSushi} className="h-96 w-auto" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
