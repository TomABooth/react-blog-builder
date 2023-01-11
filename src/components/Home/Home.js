import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('comforter');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');

  return (
    <main className="main">
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} text={text} font={font} align={align} />
      <Editor
        setTitle={setTitle}
        title={title}
        setSubtitle={setSubtitle}
        subtitle={subtitle}
        setText={setText}
        text={text}
        setFont={setFont}
        font={font}
        setAlign={setAlign}
        align={align}
      />
    </main>
  );
}
