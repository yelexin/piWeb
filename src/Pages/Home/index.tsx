import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  let navigate = useNavigate();

  return (
    <div className="apps">
      <div
        id="v2ray"
        onClick={() => {
          navigate('/v2ray');
        }}
      >
        v2ray
      </div>
      <div>电器控制</div>
    </div>
  );
}
export default Home;
