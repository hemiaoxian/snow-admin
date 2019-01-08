
/**
 *  封装了一个webscoket的方法
 */
export const initWebSocket = (message, parmas) => {
  return new Promise((resolve, reject) => {
  // 初始化一个 WebSocket 对象
    const ws = new WebSocket('ws://www.snowstormdoll.cn/ws')
    // var receivedMsg = ''
    // 建立 web socket 连接成功触发事件
    ws.onopen = () => {
      const sendData = {
        message: message,
        data: parmas
      }
      // 使用 send() 方法发送数据
      ws.send(JSON.stringify(sendData))
    }

    // 接收服务端数据时触发事件
    ws.onmessage = function (evt) {
      // const receivedMsg = JSON.parse(evt.data)
      const {message} = evt
      if (message === 'userLoginResult') {
        console.log(evt)
        resolve(evt)
      }
    }

    // 断开 web socket 连接成功触发事件
    ws.onclose = function () {
      console.log('连接已关闭...')
    }
  })
}

// // 连接建立之后执行send方法发送数据
// export const websocketonopen = (message, parmas) => {
//   const sendData = {
//     message: message,
//     data: parmas
//   }
//   this.websocketsend(JSON.stringify(sendData))
// }

// // 连接建立失败重连
// export const websocketonerror = () => {
//   this.initWebSocket()
// }

// export const initWebSocket = () => { // 初始化weosocket
//   const wsuri = 'ws://www.snowstormdoll.cn/ws'
//   this.websock = new WebSocket(wsuri)
//   this.websock.onmessage = this.websocketonmessage
//   this.websock.onopen = this.websocketonopen
//   this.websock.onerror = this.websocketonerror
//   this.websock.onclose = this.websocketclose
// }
// export const websocketonopen = () => { // 连接建立之后执行send方法发送数据
//   const loginData = {
//     userID: 'test',
//     password: '123456',
//     actionType: 1
//   }
//   const params = {message: 'userLogin', data: loginData}
//   this.websocketsend(JSON.stringify(params))
// }
// export const websocketonerror = () => { // 连接建立失败重连
//   this.initWebSocket()
// }
// export const websocketonmessage = (e) => { // 数据接收
//   const redata = JSON.parse(e.data)
//   console.log(redata)
// }
// export const websocketsend = (Data) => { // 数据发送
//   this.websock.send(Data)
// }
// export const websocketclose = (e) => { // 关闭
//   console.log('断开连接', e)
// }
