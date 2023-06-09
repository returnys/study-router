import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
  // 페이지이동
  const navigate = useNavigate();

  // 주소표시줄에 기재된 URL에 전달된 parameter를 파악
  // 주소표시줄에 표현되는 형식 2가지
  // prameter 형식 : /songs/:id
  // query String 형식 : /songs?id=1&title=안녕
  const { id } = useParams();
  // id와 같은 1개의 객체를 songs에서 추출해서 화면을 갱신한다.
  // 화면갱신을 위해서 state를 활용해야 한다.
  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  // 컴포넌트 마운트 되기전에 처리한다. => 끝부분에 [] 필수
  // 데이터 로딩 및 처리 시 좋은 위치
  // useEffect(()=>{},[])
  useEffect(() => {
    // id를 이용해서 데이터에서 검색한 결과를 출력한다.
    // 배열.find는 조건이 true인 요소를 리턴한다.
    // 배열.find는 여러개가 true일 때 처음 true인 값만 리턴한다.
    // URL Parameter는 무조건 문자열이다. 숫자로 변경해야한다.
    // 목록의 id 속성과 params로 전달된 id가 같다면 true
    // : item.id === parseInt(id)
    const song = songs.find((item) => item.id === parseInt(id));
    // 검색이 되지 않을 경우를 위한 처리
    // 없는 데이터가 넘어올 경우를 대비
    if (song) {
      // setTitle(song.title);
      // setMusician(song.musician);
      // setLink(`https://m.youtube.com/watch?v=${song.youtube_link}`);
      // 조금 더 안전하게 처리
      setTitle(song.title ? song.title : "");
      setMusician(song.musician ? song.musician : "");
      setLink(
        song.youtube_link
          ? `https://m.youtube.com/watch?v=${song.youtube_link}`
          : ""
      );
    } else {
      alert("자료가 없습니다.");
      // 화면 이동시킬 때 navigate 사용
      navigate("/songs");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        {/* 유튜브 보여주기 */}
        <a href={link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
