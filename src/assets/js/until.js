// 这是公共方法函数

/**
 *  验证手机号码
 * @param {手机号码} phone
 */
export const checkPhone = (phone) => {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    return false
  } else {
    return true
  }
}
