import { memo } from "react";

export default memo(function FinishBtn({ onClick }) {
  console.log("rendering.......");
  return (
    <>
      <button className="todo-btn" onClick={onClick}>
        Дуусгах
      </button>
    </>
  );
});
