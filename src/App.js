import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState , useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
    const [wordcount, setWordcount] = useState(0);
    const [charcount, setCharcount] = useState(0);

    const changeHandler = (event) =>{
        setText(event.target.value);
    };

    useEffect(() =>{
        const words = text.split(' ');

        let wordcount = 0;
        words.forEach((word) =>{
            if (word.trim() !== ''){
                wordcount++;
            }
        });
        setWordcount(wordcount);

        setCharcount(text.length);

    },[text]);
   return (
    <div class="container">
      <div>
        <h1 class="text-center text-success"> Responsive Paragraph Word Counter</h1>
      </div>
      <br/>
        <textarea class="form-control" placeholder='Enter the text...' onChange={changeHandler} value={text} rows={10}></textarea>
        <div>
          <br/>
          <h4 class="text-secondary">Word Count:  {wordcount}</h4>
          <h4 class="text-secondary">Character Count: {charcount}</h4>
        </div>
    </div>
  );
}

export default App;
