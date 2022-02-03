import axios from 'axios';
import React, { useState } from 'react';

export function Launch(props: any) {
  const { serverId } = props;
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div
      onClick={async () => {
        setLoading(true);
        const res = await axios.post('/api/v1/v2ray/enableServer', {
          id: serverId,
        });
        if (res.data.code === 200) {
          alert('启用成功');
        } else {
          alert('启用失败');
        }
        setLoading(false);
      }}
    >
      {loading ? '启动中' : '启动'}
    </div>
  );
}
