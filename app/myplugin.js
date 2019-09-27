function a(option) {

}
a.prototype.apply = function (b) {
  b.plugin('compilation', function (compilation) {
    compilation.plugin('optimize', function () {
      console.log('这里被触发了')
    })
  })
}
module.exports = a