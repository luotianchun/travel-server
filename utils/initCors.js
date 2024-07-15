const COS = require('cos-nodejs-sdk-v5')

// 在服务启动时或者页面加载时初始化，注意这是异步的，需要等待完成，可以通过 this.cos 是否存在来判断是否完成。
initcos()
let cos = null

/**
 * 封装的COS-SDK初始化函数，建议在服务启动时挂载全局，通过this.cos使用对象
 */
async function initcos() {
    console.log('initttt cos'); //sy-log
  try {
    if(cos) return;
    cos = new COS({
      getAuthorization: async function (options, callback) {
        const res = await call({
          url: 'http://api.weixin.qq.com/_/cos/getauth',
          method: 'GET',
        })
        console.log('res',res); //sy-log
        const info = JSON.parse(res)
        const auth = {
          TmpSecretId: info.TmpSecretId,
          TmpSecretKey: info.TmpSecretKey,
          SecurityToken: info.Token,
          ExpiredTime: info.ExpiredTime,
        }
        callback(auth)
      },
    })
    console.log('COS初始化成功')
  } catch (e) {
    console.log('COS初始化失败', res)
  }
}


/**
 * 封装的网络请求方法
 */
function call (obj) {
  return new Promise((resolve, reject) => {
    request({
      url: obj.url,
      method: obj.method || 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(obj.data || {})
    }, function (err, response) {
      if (err) reject(err)
      resolve(response.body)
    })
  })
}


module.exports={
    cos
}