const COS = require('cos-nodejs-sdk-v5')
const fetch = require("node-fetch")
// 在服务启动时或者页面加载时初始化，注意这是异步的，需要等待完成，可以通过 this.cos 是否存在来判断是否完成。
initcos()

/**
 * 封装的COS-SDK初始化函数，建议在服务启动时挂载全局，通过this.cos使用对象
 */
async function initcos() {
  try {
    const res = await fetch('http://api.weixin.qq.com/_/cos/getauth', {
      method: 'GET'
  })
  console.log('res',res); //sy-log
    // const info = JSON.parse(res)
    // console.log('info1',info); //sy-log
//    const a= new COS({
//       getAuthorization: async function (options, callback) {
//         const res = await axios.get('http://api.weixin.qq.com/_/cos/getauth')
//         const info = JSON.parse(res)
//         console.log('info',info); //sy-log
//         const auth = {
//           TmpSecretId: info.TmpSecretId,
//           TmpSecretKey: info.TmpSecretKey,
//           SecurityToken: info.Token,
//           ExpiredTime: info.ExpiredTime,
//         }
//         callback(auth)
//       },
//     })
    console.log('COS初始化成功',)
  } catch (e) {
    console.log('COS初始化失败', e)
  }
}




module.exports={

}