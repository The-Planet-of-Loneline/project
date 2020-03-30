import Taro from '@tarojs/taro';

// Fetch(url, data).then((res) => { console.log(res) })
const preHttp = 'https://planet.muxixyz.com/lonely_planet/v1/';
const Fetch = (url, data = {}, method = 'GET') => {
  const header = {
    'content-type': 'application/json',
    token: Taro.getStorageSync('token')
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
        const id = Taro.getStorageSync('sid')
        const password = Taro.getStorageSync('pwd')
        if ( id&&password ) {
          Taro.request({
            url: 'https://planet.muxixyz.com/lonely_planet/v1/login/',
            data: {
              sid:id,
              pwd:password
            },
            method:'POST',
            header:{'content-type': 'application/json'}
          }).then( back => {
            Taro.setStorage({
              key: 'token',
              data: back.data.token,
            })
          })
        }
        if (res.data) {
          return res.data;
        } else {
          return res.code;
        }
      case 404:
        throw new Error('not found');
      case 500:
        if (res.data) {
          return res.data;
        } else {
          return res.code;
        }
        // throw new Error('服务器错误');
    }
  });
};

export default Fetch;