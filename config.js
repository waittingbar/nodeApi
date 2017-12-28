module.exports = { 
    serverPort: '8765', 

    // 小程序 appId 和 appSecret 
    // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
    appId: 'wx24c49e0c54dad15c', 
    appSecret: 'a24ad7424ca2c0059c11363bb935918e', 

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    mongoHost: '127.0.0.1', 
    mongoPort: '27017', 
    mongoUser: 'api', 
    mongoPass: 'api', 
    mongoDb: 'api'
};