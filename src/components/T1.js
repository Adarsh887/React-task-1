import { useState, useEffect } from 'react';

function T1()
{
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
}

export default T1;