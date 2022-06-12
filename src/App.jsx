import './App.css';
import Message from "./components/Message/Message";
import Input from "./components/Message/Input";
import Button from "./components/Message/Button";

function handleInput() {
    const inputValue = document.querySelector(".name-field").value;
    const headingNode = document.querySelector('h2');
    headingNode.textContent =  inputValue.trim().length > 1 ? `Привет, ${ inputValue } !` : 'Укажите ваше имя';
}

function App() {
    return (
      <>
        <Message />
        <Input />
        <Button func={ handleInput }/>
      </>
    );
}

export default App;
