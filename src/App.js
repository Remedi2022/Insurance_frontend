import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color:'red', fontSize : '32px'}}>블로그임</h4>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>글제목2</h4>
        <p>2월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
