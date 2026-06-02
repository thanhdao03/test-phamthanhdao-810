"use client";

import { useEffect, useRef } from "react";
import VideoActions from "../VideoActions/VideoActions";

interface VideoItem {
  id: number;
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
}

interface Props {
  video: VideoItem;
}

export default function VideoCard({ video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.7,
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        src={video.videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlayPause}
        className="video"
      />

      <div className="video-info">
        <h3>@{video.authorName}</h3>
        <p>{video.description}</p>
      </div>

      <VideoActions likesCount={video.likesCount} />
    </div>
  );
}
