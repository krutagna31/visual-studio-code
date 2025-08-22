"use client";

import { useState, useRef } from "react";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button, CustomLink, ThemeVideo } from "@/components/ui";
import { ArrowDownToLine } from "lucide-react";

type PlaybackState = "playing" | "paused" | "ended";

const playbackStateToText: Record<PlaybackState, string> = {
  playing: "Pause",
  paused: "Play",
  ended: "Replay",
};

function Hero() {
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
            <CustomLink href="#" variant="secondary">Web</CustomLink>, <CustomLink href="#" variant="secondary">Insiders edition</CustomLink>or <CustomLink href="#" variant="secondary">other platforms</CustomLink>
          </p>
        </div>
        <div className="space-y-2">
          <div className="rounded-md bg-[url(/images/hero/hero-light.webp)] p-4">
            <ThemeVideo
              id="hero-video"
              ref={videoRef}
              src={{
                light: "/videos/hero/hero-light-lg.webm",
                dark: "/videos/hero/hero-dark-lg.webm",
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

export { Hero };
