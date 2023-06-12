import React from "react";
import Youtube from "react-youtube";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Player = () => {
  const { songs } = useOutletContext();
  const navigate = useNavigate();
  // useParams에 담긴 값은 무조건 문자열이기 때문에 parseInt 이용해서 숫자로 변경해야한다
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  // 데이터를 가지고 와서 세팅, []가 있기 때문에 1번만 실행
  useEffect(() => {
    const song = songs.find((item) => item.id === parseInt(id));
    if (song) {
      setTitle(song.title);
      setYoutubeLink(song.youtube_link);
    } else {
      alert("자료가 없습니다.");
      navigate("/songs");
    }
  }, []);
  return (
    <div className="modal modal-sheet d-block p-4 py-md-5">
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">{title}</h1>
            <Link to="/songs" type="button" className="btn-close" />
          </div>
          <div className="modal-body py-0 pb-3">
            {/* react-youtube 라이브러리 활용 */}
            <Youtube
              videoId={youtubeLink}
              opts={{ width: "100%", playerVars: { autoplay: 1 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
