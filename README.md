# Vertical Video Feed

## Tech Stack

- Next.js 15
- TypeScript
- CSS
- Intersection Observer API

## Features

- Vertical Scroll Feed
- Play/Pause on Click
- Auto Play/Pause on Scroll
- Like Button
- Responsive Navigation

## Auto Play/Pause Logic

The application uses the Intersection Observer API to detect whether a video is visible in the viewport.

When the visibility ratio exceeds 70%, the video automatically plays.

When the video leaves the viewport, it is automatically paused to optimize performance and provide a social-media-like experience.
