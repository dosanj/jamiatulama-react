import React, { useEffect } from "react";
import { IAppContentProps } from "../models/components.props";
import { HomePage } from "./HomePage";
import { useParams } from "react-router-dom";
export function AppContent(props: IAppContentProps) {
  const { link } = useParams();

  const closeSideMenu = () => {
    props.closeSideMenu();
  };
  const openSideMenu = () => {
    props.openSideMenu();
  };
  let contentPage = (
    <div className="app-content" onClick={closeSideMenu}>
      <HomePage
        currentLanguage={props.currentLanguage}
        openSideMenu={openSideMenu}
      />
    </div>
  );
  useEffect(() => {
    props.linkChanged(link);
  });
  const content = props.contentData;
  if (content) {
    contentPage = (
      <div className="app-content" onClick={closeSideMenu}>
        <h1>{content?.["english-heading"]}</h1>
        <p>{content?.["english-sub-heading"]}</p>
        <div className="videos-list">
          {content["videos-list"]?.map((video) => {
            return (
              <div className="yt-video" key={video?.["video-url"]}>
                <iframe
                  className="yt_players"
                  id="link1"
                  title={video?.["video-url"]}
                  src={video?.["video-url"]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
                <div className="yt-video-text urduText">{video.urdu}</div>
                <div className="yt-video-text">{video.hindi}</div>
                <div className="yt-video-text">{video.english}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return contentPage;
}
