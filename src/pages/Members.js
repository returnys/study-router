import React from "react";
import { useNavigate } from "react-router-dom";
/*
  리액트 컴포넌트에서 이미지 소스 불러오는법
  1. src : 각각의 이미지를 import한 다음 이미지 태그의 src속성에 적용
  예) import gogo from "./img/aaa.jpg"
  <img src={gogo}/>
  이미지 갯수만큼 import를 해야한다.
  2. publicimport { useNavigate } from 'react-router-dom';
 폴더 사용 (pubimport { useNavigate } from 'react-router';
lic 폴더 안쪽에 import { useNavigate } from 'react-router-dom';
이미지를 배치)
  2.1. process.env.PUBLIC_URL 구문 사용
  2.2. pubilc 폴더 절대경로를 구해서 직접 출력
*/
const Members = ({ members }) => {
  // URI 경로를 이동할 수 있는 Hook
  const navigate = useNavigate();
  // 사용법 : navigate(경로, 옵션)

  const goHome = () => {
    // navigate를 이용해서 정보를 전달하고 싶다.
    // state 옵션에 객체를 정의해서 전달해 준다.
    // navigate("/", { state: { from: "/members", age: 30 } });
    navigate("/");
  };

  // location의 state 활용하기
  // const showInfo = (_who, _img) => {
  //   navigate("/about", { state: { singer: _who, photo: _img } });
  // };

  const path = process.env.PUBLIC_URL;
  const imgStyle = {
    width: 90,
    height: 80,
  };
  const list = members.map((item, index) => {
    // jsx에서는 반복문 사용 시 key=unique id(겹치지않는 값)가 있어야한다.
    return (
      <div key={index} className="col-6 col-md-4 col-lg-3">
        <img
          src={`${path}/${item.photo}`}
          alt={item.name}
          className="img-thumbnail"
          style={imgStyle}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-secondary" onClick={goHome}>
        Home
      </button>
    </div>
  );
};

export default Members;
