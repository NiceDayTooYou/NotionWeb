import React from 'react';
import { useState } from 'react';

interface Props {
  text: string;
}

export default function TypewriterInput(props: Props) {
  const [text, setText] = useState<string>(props.text);

  const typewrite = () => {
    if (text.length === 0) {
      return;
    }
    const char = text[0];
    setText(text.substring(1));
    setTimeout(typewrite, 100);
  };

  React.useEffect(() => {
    typewrite();
  }, []);

  return (
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold">{`Welcome To My Page`}</h1>
      <input
        className="mt-12 text-center text-3xl font-bold"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <p className="text-center" style={{ color: 'red', fontSize: '30px' }}>
        和美好不期而遇❤️
      </p> 
      <h2 className="mt-4 text-center text-2xl font-semibold">How Are You Today</h2>
      <p className="text-center" style={{ color: 'green', fontSize: '30px' }}>
        热爱生活，知足常乐👻
      </p>
      <h2 className="mt-4 text-center text-2xl font-semibold">Enjoy Your Time</h2>
      <p className="text-center" style={{ color: 'black', fontSize: '30px' }}>
        昨天已经成为历史
      </p>
      <p className="text-center" style={{ color: 'black', fontSize: '30px' }}>
        明天却是个谜团
      </p>
      <p className="text-center" style={{ color: 'black', fontSize: '30px' }}>
        而今天是天赐的礼物
      </p>
      <p className="text-center" style={{ color: 'black', fontSize: '30px' }}>
        要像珍惜礼物那样珍惜今天
      </p>
    </div>
  );
}
