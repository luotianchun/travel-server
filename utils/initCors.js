const COS = require('cos-nodejs-sdk-v5')
const fetch = require("node-fetch")
// 在服务启动时或者页面加载时初始化，注意这是异步的，需要等待完成，可以通过 this.cos 是否存在来判断是否完成。
initcos()

/**
 * 封装的COS-SDK初始化函数，建议在服务启动时挂载全局，通过this.cos使用对象
 */
async function initcos() {
  try {
    const res = await fetch('https://api.weixin.qq.com/_/cos/getauth', {
      method: 'GET'
  })
    console.log('res',res);
  } catch (e) {
    console.log('COS初始化失败', e)
  }
}




module.exports={

}