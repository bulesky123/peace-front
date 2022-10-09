/**
 * 加载所有的reducer
 * 默认命名为该文件夹名字，中横线转驼峰命名
 * 注意：各模块文件夹不能重名
 */
 const files = require.context('../pages', true, /redux\.ts$/)

 const modules = {}
 // 中横线转驼峰
 const toHump = name => name.replace(/-(\w)/g, (letter) => letter.toUpperCase())

 files.keys().forEach((key) => {
   const nameArr = key.split('/')
   const moduleName = toHump(nameArr[nameArr.length - 2])
   if (files(key).default) {
     modules[moduleName] = files(key).default
   }
 })
console.log(modules, 'modules')
 export default modules
