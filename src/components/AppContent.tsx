import React from 'react';
import { IAppContentProps } from '../models/components.props';
export function AppContent(props: IAppContentProps) {
  const hideSideNav = () => {
    props.hideSideNav();
  };
  let contentData = (
    <div className="app-content" onClick={hideSideNav}>
      <h1>Home Page</h1>
    </div>
  );
  const content = props.contentData;
  if (content) {
    contentData = (
      <div className="app-content" onClick={hideSideNav}>
        <h1>{content?.heading}</h1>
        <p>{content?.text}</p>
        <div className="videos-list">
          {content.videosList?.map((video) => {
            return (
              <div className="yt-video" key={video.url}>
                <iframe
                  className="yt_players"
                  id="link1"
                  title={video.url}
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
                <div className="yt-video-text urduText">{video.urduText}</div>
                <div className="yt-video-text">{video.hindiText}</div>
                <div className="yt-video-text">{video.englishText}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return contentData;
}
