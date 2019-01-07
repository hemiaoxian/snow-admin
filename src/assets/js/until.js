// 这是公共方法函数

/**
 *  验证手机号码
 * @param {手机号码} phone
 */
export const checkPhone = (phone) => {
  return new Promise((resolve, reject) => {
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      resolve(false)
    } else {
      resolve(true)
    }
  })
}
