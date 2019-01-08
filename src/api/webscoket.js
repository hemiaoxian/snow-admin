// 初始化一个 WebSocket 对象
var ws = new WebSocket('ws://www.snowstormdoll.cn/ws')

// 建立 web socket 连接成功触发事件
ws.onopen = function () {
  // 使用 send() 方法发送数据
  ws.send('发送数据')
  alert('数据发送中...')
}

// 接收服务端数据时触发事件
ws.onmessage = function (evt) {
  var receivedMsg = evt.data
  console.log(receivedMsg)
  alert('数据已接收...')
}

// 断开 web socket 连接成功触发事件
ws.onclose = function () {
  alert('连接已关闭...')
}
export const initWebSocket = () => {
  // 初始化一个 WebSocket 对象
  // const ws = new WebSocket('ws://www.snowstormdoll.cn/ws')
}
