
//react-router-dom으로 작성한 단일 페이지 애플리케이션
//npm install react-router-dom
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

export default function App() {
  return (
    <BrowserRouter>
      <div style = {{ padding: 20, border: '5px solid gray' }}>
        <Link to = "/">홈</Link>
        <br />
        <Link to = "/photo">사진</Link>
        <br />
        <Link to = "/rooms">방 소개</Link>
        <br />
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>이곳은 홈페이지입니다.</h2>;
}
function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요.</h2>;
}


/*---------------------------------------------------------------------*/
/*부라우저 히스토리 API를 이용한 단일 페이지 애플리케이션
import React, { useEffect, useState } from 'react';

export default function App() {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    window.onpopstate = event => {
      setPageName(event.state);
    };
  }, []);

  function onClick1() {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    setPageName(pageName);
  }

  function onClick2() {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    setPageName(pageName);
  }

  return (
    <div>
      <button onClick = {onClick1}>page1</button>
      <button onClick = {onClick2}>page2</button>
      {!pageName && <Home />}
      {pageName === 'page1' && <Page1 />}
      {pageName === 'page2' && <Page2 />}
    </div>
  );
}

function Home() {
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Page1() {
  return <h2>여기는 Page1 입니다.</h2>;
}
function Page2() {
  return <h2>여기는 Page2 입니다.</h2>;
}
/*---------------------------------------------------------------------*/

/*---------------------------------------------------------------------*/
/*단일 페이지 애플리케이션 구현하기
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.onpopstate = function(event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);

  return (
    <div>
      <button onClick={() => window.history.pushState('v1', '', '/page1')}>
        page1
      </button>
      <button onClick={() => window.history.pushState('v2', '', '/page2')}>
        page2
      </button>
    </div>
  );
}
/*---------------------------------------------------------------------*/