import { useState } from 'react';

interface ProjectVideoProps {
  imageSrc: string;
  videoSrc?: string;
  title: string;
}

export default function ProjectVideo({ imageSrc, videoSrc, title }: ProjectVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    if (videoSrc) {
      setShowVideo(true);
    }
  };

  return (
    <div className="project-video" data-video-src={videoSrc}>
      {!showVideo ? (
        <>
          <img className="project-video__image" src={imageSrc} alt={title} />
          {videoSrc && (
            <button
              className="project-video__play-btn"
              aria-label="Reproducir video"
              onClick={handlePlayClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play-icon lucide-play"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            </button>
          )}
        </>
      ) : (
        <iframe
          src={`${videoSrc}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      )}
    </div>
  );
}
