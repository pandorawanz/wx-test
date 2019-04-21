// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)

  const wxContext = cloud.getWXContext()
  

  var productId = event.productId // The first data
  var productNum = event.productNum // The second data
  try {
      await db.collection('item').add({
      data: {
        _openid:wxContext.OPENID,
        productId: productId,
        productNum: productNum
      }
    })
  } catch (e) {
    console.log(e)
  }
}