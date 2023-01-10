import React from "react";

const ImcompleteTodos = () => {
  return (
    <div>
      <p>終わっていないTODO</p>
      <ul>
        <li>
          <span>タイトル</span>
          <button>完了</button>
          <button>削除</button>
        </li>
      </ul>
    </div>
  );
};
export default ImcompleteTodos;
