import React from "react";
/*
  리액트 컴포넌트에서 이미지 소스 불러오는법
  1. src : 각각의 이미지를 import한 다음 이미지 태그의 src속성에 적용
  예) import gogo from "./img/aaa.jpg"
  <img src={gogo}/>
  이미지 갯수만큼 import를 해야한다.
  2. public 폴더 사용 (public 폴더 안쪽에 이미지를 배치)
  2.1. process.env.PUBLIC_URL 구문 사용
  2.2. pubilc 폴더 절대경로를 구해서 직접 출력
*/
const Members = ({ members }) => {
  const path = process.env.PUBLIC_URL;
  const imgStyle = {
    width: 90,
    height: 80,
  };
  const list = members.map((item, index) => {
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
    </div>
  );
};

export default Members;
