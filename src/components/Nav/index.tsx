import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { config } from '../../config';
import { ICurUser } from '../../interfaces/login';
import { UserContext } from '../../App';

function Nav() {
  const navigate = useNavigate();
  const curUser = useContext<ICurUser>(UserContext);
  function goHome() {
    navigate('/');
  }

  return (
    <nav>
      <img className="project-name" src="/house.png" onClick={goHome}></img>
      <span className="project-name" onClick={goHome}>
        Home Control
      </span>
      <span className="login">
        {curUser.id ? (
          <>
            <span>{curUser.email}</span>
            <a id="logout-link" href={`${config.serverOrigin}/logout?returnTo=/`}>登出</a>
          </>
        ) : (
          <a href={`${config.serverOrigin}/login/github/init?returnTo=${window.location.href}`}>登录</a>
        )}
      </span>
    </nav>
  );
}

export default Nav;
