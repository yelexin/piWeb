import React, { useEffect, useState } from 'react';
import './index.css';
import { Launch } from '../../components/Launch';
import { getServers, updateSubscription } from '../../apis/v2ray';

function V2ray() {
  const [servers, setServers] = useState<any[]>([]);
  const [updateSubscriptionBtnLoading, setUpdateSubscriptionBtnLoadings] = useState<boolean>(false);
  useEffect(() => {
    (async function () {
      const res = await getServers();
      setServers(res.data.data);
    })();
  }, []);
  return (
    <div className='table-container'>
      <table className={updateSubscriptionBtnLoading ? 'loading-table' : ''}>
        <thead>
          <tr>
            <th>序号</th>
            <th>名称</th>
            <th>Host</th>
            <th>Port</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.vmessUriRawJson.ps}</td>
              <td>{item.vmessUriRawJson.add}</td>
              <td>{item.vmessUriRawJson.port}</td>
              <td className="action">
                <Launch serverId={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        disabled={updateSubscriptionBtnLoading}
        onClick={async (e) => {
          setUpdateSubscriptionBtnLoadings(true);
          await updateSubscription();
          const res2 = await getServers();
          setServers(res2.data.data);
          setUpdateSubscriptionBtnLoadings(false);
          alert('更新订阅成功');
        }}
      >
        更新订阅
      </button>
    </div>
  );
}

export default V2ray;
