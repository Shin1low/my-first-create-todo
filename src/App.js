import "./styles.css";
import React from "react";
import { useState } from "react";
import InputForm from "./components/Input.js";
import ImcompleteTodos from "./components/imcompleteTodo";
import Filter from "./components/Filter";

export default function App() {
  const [todos, setTodos] = useState(
    { title: "test", sastus: "未着手" },
    { title: "test2", sastus: "着手" },
    { title: "test3", sastus: "完了" }
  );

  const [todoTitle, setTodoTitle] = useState("");

  const [todoId, setTodoId] = useState(1);

  const handleSetTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const resetTodoTitle = () => {
    setTodoTitle("");
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todoId, title: todoTitle, status: "notStarted" }
    ]);
    setTodoId(todoId + 1);
    resetTodoTitle();
  };

  return (
    <>
      <InputForm />

      <div>
        <p>完了したTODO</p>
        <ul>
          <li>完了した</li>
          <button>削除</button>
        </ul>
      </div>
    </>
  );
}
