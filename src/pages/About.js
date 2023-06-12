import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const About = ({ title }) => {
  // 웹브라우저의 Router를 강제로 변경하려면 useNavigate()를 활용
  const navigate = useNavigate();
  // useSearchParams : ?a=1&b=2 쿼리 문자열 활용하기
  // useLocation : ?a=1&b=2 쿼리 문자열 활용하기

  const location = useLocation();
  // console.log("주소창 객체", location.state.singer);
  // console.log("주소창 객체", location.state.photo);
  // console.log("주소창 객체", location.hash);
  // useLocation() === window.location객체
  // useSearchParams()를 이용하면 수월하게 query를 추출할 수 있다.

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("total"));

  // 현재 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 문자열을 숫자로 바꾸려면 parseInt
    const startPage = parseInt(searchParams.get("page"));
    // NaN === NaN => false
    // isNaN(값) : NaN인지 아닌지 검사
    // isNaN(값)의 결과가 true라면 값이 숫자가 아니다.
    // isNaN(값)의 결과가 false라면 값이 숫자다.
    setPage(!isNaN(startPage) ? startPage : 1);
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      navigate(window.location.pathname + `?page=${page - 1}&total=5`);
    }
  };
  const goNext = () => {
    navigate(window.location.pathname + `?page=${page + 1}&total=5`);
  };
  // const goNaver = () => {
  // 윈도우 강제로 이동하기
  // window.open("http://www.naver.com");
  // 아래처럼 전달하면 path와 함께 붙는다.
  // navigate("http://www.naver.com");
  // };
  // const goHome = () => {
  // navigate를 이용해서 정보를 전달하고 싶다.
  // state 옵션에 객체를 정의해서 전달해 준다.
  // navigate("/", { state: { from: "/About", age: 20 } });
  // };
  return (
    <div className="card card-body">
      <h2>About {title}</h2>
      <div>
        <div className="m-2">현재 페이지 : {page} </div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
