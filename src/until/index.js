import store from '../store'
/**
 *判断是否为空，空返回false，非空返回ture
 * @param {*} value
 * 传入值
 */
export const IsNull = value => {
  if (value === null || value === '' || value === undefined) {
    return false
  }
  return true
}

/**
 *
 * @param {string} gettersKey
 * @param {string} actionsKey
 * 分别为vuex中的getters key  和 actions key值
 */
export const getStoreData = (gettersKey, actionsKey) => {
  if (store.getters[gettersKey].length == 0) {
    store.dispatch(actionsKey)
  }
}
