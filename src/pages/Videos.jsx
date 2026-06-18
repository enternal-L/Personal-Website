import React, { useRef, useState, useLayoutEffect } from 'react';
import { videosContent } from '../data/content';

const GAP = 6;
const TARGET_ROW_HEIGHT = 200;

function buildRows(items, containerWidth, targetRowHeight, gap) {
  const rows = [];
  let current = [];
  let aspectSum = 0;

  items.forEach((item) => {
    current.push(item);
    aspectSum += item.aspectRatio;
    const rowWidth = aspectSum * targetRowHeight + (current.length - 1) * gap;
    if (rowWidth >= containerWidth) {
      rows.push({ items: current, aspectSum, full: true });
      current = [];
      aspectSum = 0;
    }
  });
  if (current.length) {
    rows.push({ items: current, aspectSum, full: false });
  }

  return rows.map((row) => {
    const gapsWidth = (row.items.length - 1) * gap;
    let rowHeight = (containerWidth - gapsWidth) / row.aspectSum;
    if (!row.full) {
      const natural = row.aspectSum * targetRowHeight + gapsWidth;
      rowHeight = natural > containerWidth ? rowHeight : targetRowHeight;
    }
    return {
      items: row.items.map((item) => ({
        ...item,
        width: rowHeight * item.aspectRatio,
        height: rowHeight,
      })),
    };
  });
}

const VideoCell = ({ video, onMeasure }) => {
  const Tag = video.url ? 'a' : 'div';
  const linkProps = video.url
    ? { href: video.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag
      {...linkProps}
      className={`collage-cell${video.url ? ' collage-cell--link' : ''}`}
      style={{ width: `${video.width}px`, height: `${video.height}px` }}
    >
      {video.src && (
        <img
          src={video.src}
          alt={video.title}
          className="collage-media"
          onLoad={(e) => {
            if (video.hasExplicitRatio) return;
            const { naturalWidth, naturalHeight } = e.currentTarget;
            if (naturalWidth && naturalHeight) {
              onMeasure(video.title, naturalWidth / naturalHeight);
            }
          }}
        />
      )}
    </Tag>
  );
};

const Videos = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [ratios, setRatios] = useState({});

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMeasure = (title, ratio) => {
    setRatios((prev) =>
      Math.abs((prev[title] ?? 0) - ratio) < 0.001 ? prev : { ...prev, [title]: ratio }
    );
  };

  // An explicit aspectRatio in content.js always wins; the measured ratio is
  // only a fallback for entries that don't set one.
  const items = videosContent.map((v) => ({
    ...v,
    hasExplicitRatio: v.aspectRatio != null,
    aspectRatio: v.aspectRatio ?? ratios[v.title] ?? 1.5,
  }));

  const rows =
    containerWidth > 0 ? buildRows(items, containerWidth, TARGET_ROW_HEIGHT, GAP) : [];

  return (
    <div className="collage-page">
      <header className="top-links">
        <span className="top-links-caption">made with whimsy at</span>
        <div className="top-links-row">
          <a
            className="top-link"
            href="https://www.instagram.com/marvincs20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @marvincs20
          </a>
          <a
            className="top-link"
            href="https://www.youtube.com/@enternal0070/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            @MarvJira
          </a>
        </div>
      </header>

      <div className="collage-body">
        <div className="collage-grid" ref={containerRef} style={{ gap: `${GAP}px` }}>
          {rows.map((row, i) => (
            <div className="collage-row" key={i} style={{ gap: `${GAP}px` }}>
              {row.items.map((video) => (
                <VideoCell key={video.title} video={video} onMeasure={handleMeasure} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
