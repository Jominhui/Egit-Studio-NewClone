import React from "react";
import "./Artist.scss";
import ArtistList from "../../models/Artist";

interface ArtistProps {
  artistRef: React.MutableRefObject<null | HTMLDivElement>;
}

const Artist = ({ artistRef }: ArtistProps) => {
  return (
    <>
      <div className="artist">
        <div className="artist-box">
          <div className="artist-box-area">
            <div className="artist-box-area-title">ARTISTS</div>
            <div className="artist-box-area-content">
              젊음과 열정으로 비전을 그리는
              <br />
              에이트스튜디오의 소속 작가를 소개합니다.
            </div>
          </div>
          <div ref={artistRef}>
            {ArtistList.map((res, idx) => (
              <div className="artist-box-list sa-up" key={idx}>
                <div className="artist-box-list-content">
                  <img src={res.img1} />
                  <div className="artist-box-list-content-name">
                    {res.artist1}
                  </div>
                  <div className="artist-box-list-content-info">
                    {res.info1}
                  </div>
                </div>

                <div className="artist-box-list-content">
                  <img src={res.img2} />
                  <div className="artist-box-list-content-name">
                    {res.artist2}
                  </div>
                  <div className="artist-box-list-content-info">
                    {res.info2}
                  </div>
                </div>

                <div className="artist-box-list-content">
                  <img src={res.img3} />
                  <div className="artist-box-list-content-name">
                    {res.artist3}
                  </div>
                  <div className="artist-box-list-content-info">
                    {res.info3}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
