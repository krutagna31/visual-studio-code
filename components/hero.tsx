"use client";

import { useState, useRef } from "react";
import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import { Button } from "./ui/button";
import { ArrowDownToLine } from "lucide-react";
import { ThemeVideo } from "@/components/ui/theme-video";

type PlaybackState = "playing" | "paused" | "ended";

const playbackStateToText: Record<PlaybackState, string> = {
  playing: "Pause",
  paused: "Play",
  ended: "Replay",
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playbackState, setPlaybackState] = useState<PlaybackState>("playing");

  function handlePlayingStateChange() {
    setPlaybackState((prevPlaybackState) => {
      if (prevPlaybackState === "playing") {
        videoRef.current?.pause();
        return "paused";
      }
      videoRef.current?.play();
      return "playing";
    });
  }

  return (
    <SectionContainer>
      <ViewContainer className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-center text-4xl font-bold md:text-6xl">
            <span className="block">Your code editor.</span>
            <span className="block">Redefined with AI.</span>
          </h1>
          <div className="flex justify-center gap-2">
            <Button>
              <ArrowDownToLine />
              <span>.deb</span>
            </Button>
            <Button>
              <ArrowDownToLine />
              <span>
                <div>.rpm</div>
              </span>
            </Button>
            <Button variant="secondary">Get Copilot Free</Button>
          </div>
          <p className="space-x-1 text-center text-sm">
            <a className="text-sky-500 underline" href="#">
              Web
            </a>
            <span>,</span>
            <a className="text-sky-500 underline" href="#">
              Insiders edition
            </a>
            <span>, or</span>
            <a className="text-sky-500 underline" href="#">
              other platforms
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <div className="rounded-md bg-[url(/assets/hero/hero-light.webp)] p-4">
            <ThemeVideo
              id="hero-video"
              ref={videoRef}
              src={{
                light: "/assets/hero/hero-light-lg.webm",
                dark: "/assets/hero/hero-dark-lg.webm",
              }}
              onEnded={() => {
                setPlaybackState("ended");
              }}
              muted
              autoPlay
            />
          </div>
          <div className="flex justify-center">
            <button
              aria-controls="hero-video"
              className="cursor-pointer"
              onClick={handlePlayingStateChange}
            >
              {playbackStateToText[playbackState]}
            </button>
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
