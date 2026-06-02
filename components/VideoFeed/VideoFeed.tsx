"use client";

import { videos } from "@/data/videos";
import VideoCard from "../VideoCard/VideoCard";

export default function VideoFeed() {
  return (
    <div className="feed">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
