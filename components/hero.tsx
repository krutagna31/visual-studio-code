"use client";

import { useTheme } from "next-themes";
import { useState, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "./ui/button";
import { ArrowDownToLine } from "lucide-react";

interface Playback {
  state: "playing" | "paused" | "ended";
  text: "Pause" | "Play" | "Replay";
}

export default function Hero() {
  const { theme } = useTheme();
  console.log(theme);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [playback, setPlayback] = useState<Playback>({
    state: "playing",
    text: "Pause",
  });

  function handlePlayingStateChange() {
    if (playback.state === "playing") {
      videoRef.current?.pause();
      setPlayback({ state: "paused", text: "Play" });
    } else {
      videoRef.current?.play();
      setPlayback({ state: "playing", text: "Pause" });
    }
  }

  return (
    <section className="py-12">
      <Container className="space-y-6">
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
            <video
              id="hero-video"
              key={theme}
              ref={videoRef}
              autoPlay
              muted
              onEnded={() => {
                setPlayback({ state: "ended", text: "Replay" });
              }}
            >
              <source
                src={
                  theme === "light"
                    ? "/assets/hero/hero-light-lg.webm"
                    : "/assets/hero/hero-dark-lg.webm"
                }
                type="video/webm"
              />
            </video>
          </div>
          <div className="flex justify-center">
            <button
              aria-controls="hero-video"
              className="cursor-pointer"
              onClick={handlePlayingStateChange}
            >
              {playback.text}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

