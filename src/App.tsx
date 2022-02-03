import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { checkSession } from './apis/login';
import { getUserById } from './apis/user';
import './App.css';
import Nav from './components/Nav';
import { ICurUser } from './interfaces/login';
import Home from './Pages/Home';
import V2ray from './Pages/V2ray';

export const UserContext = React.createContext<ICurUser>({ id: null, avatar: null, email: null });

function App() {
  const [curUser, setCurUser] = useState<ICurUser>({ id: null, avatar: null, email: null });
  useEffect(() => {
    (async () => {
      const res = await checkSession();
      if (res.data.code === 200) {
        if (res.data.data.id) {
          const userResp = await getUserById(res.data.data.id);
          const { id, avatar, email } = userResp.data.data;
          setCurUser({ id, avatar, email });
        }
      }
    })();
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={curUser}>
        <div className="home">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/v2ray" element={<V2ray />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
