"use client";

import { useState } from "react";

interface Props {
  likesCount: number;
}

export default function VideoActions({ likesCount }: Props) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likesCount);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="actions">
      <button onClick={handleLike}>
        {liked ? "❤️" : "🤍"}
        <p>{likes}</p>
      </button>

      <button>
        💬
        <p>Comment</p>
      </button>

      <button>
        📤
        <p>Share</p>
      </button>
    </div>
  );
}
