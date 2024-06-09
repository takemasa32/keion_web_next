"use client";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@tremor/react";
import Image from "next/image";

const AudioPlayerPage: React.FC = () => {
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const audioRef3 = useRef<HTMLAudioElement | null>(null);
  const audioRef4 = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef1.current = new Audio("/secret/audio/meow.mp3");
    audioRef2.current = new Audio("/secret/audio/dosu.mp3");
    audioRef3.current = new Audio("/secret/audio/burudo-za-.mp3");
    audioRef4.current = new Audio("/secret/audio/baikinman.mp3");
  }, []);

  const playSound = (audioRef: React.RefObject<HTMLAudioElement>) => {
    audioRef.current?.play();
  };

  return (
    <div className="bg-white">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
        <div className="flex justify-center space-x-4 sm:w-1/2">
          <Button variant="secondary" onClick={() => playSound(audioRef1)}>
            にゃーお
          </Button>
          <Button variant="secondary" onClick={() => playSound(audioRef2)}>
            どすっ
          </Button>
        </div>
        <div className="flex justify-center space-x-4 sm:w-1/2">
          <Button variant="secondary" onClick={() => playSound(audioRef3)}>
            ブルドーザー
          </Button>
          <Button variant="secondary" onClick={() => playSound(audioRef4)}>
            バイキンマン
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src="/secret/photo/happyouBaikinman.jpg"
          alt="好きなブルドーザー発表バイキソマン"
          width={500} // ここには適切な値を設定してください
          height={300} // ここには適切な値を設定してください
        />
      </div>
    </div>
  );
};

export default AudioPlayerPage;
