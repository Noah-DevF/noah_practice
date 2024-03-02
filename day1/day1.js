/**
 * variable 선언하기
 * 1) var
 * 2) let - 변수 선언
 * 3) const - 상수 선언
 */

let world = document.querySelector(".hello"); // 클래스가 "hello"인 요소를 선택하는 경우

// 버튼에 콘손 출력 이벤트 추가
world.addEventListener("click", function () {
  console.log("hello world");
});
