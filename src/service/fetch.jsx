import Taro from '@tarojs/taro';

// Fetch(url, data).then((res) => { console.log(res) })
const preHttp = 'http://47.97.74.180:9090/lonely_planet/v1/';
const Fetch = (url, data = {}, method = 'GET') => {
  const header = {
    'content-type': 'application/json',
    token: Taro.getStorageSync('token')
    // token:
    //   ''
    // token:
    //   ''
  };
  return Taro.request({
    url: preHttp + url,
    data,
    method,
    header
  }).then(res => {
    switch (res.statusCode) {
      case 200: 
        if (res.data) {
          return res.data;
        } else {
          return res.code;
        }
      case 400:
        throw new Error('没有权限访问');
      case 401:
        throw new Error('未授权');
      case 404:
        throw new Error('not found');
      case 500:
        throw new Error('服务器错误');
    }
  });
};

export default Fetch;