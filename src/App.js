import { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./components/Todo";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  /*
  在此代码中，e.preventDefault(); 作用是取消表单提交的默认行为，
  这样页面不会被刷新或跳转。然后，你可以继续执行你自己的逻辑，
  向 todos 数组添加一个新的待办事项，并清空输入框的内容。
  总之，e.preventDefault(); 是一个用于阻止事件默认行为的方法，
  通常用于处理表单提交、链接点击等事件，以允许你在事件发生时执行自定义操作。
  */
  console.log(todos);
  return (
    <div className="app">
      <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((it) => (
          <Todo key={it.id} arr={it} />
        ))}
      </ul>
    </div>
  );
}

export default App;
