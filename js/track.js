
// 页面任意元素被点击时触发
window.addEventListener('click', function (event) {
  this.console.log(event.target);
  // this.alert("you have clicked the button:"+event.target)
})

// 页面加载时触发
window.addEventListener('load', function (event) {
  this.console.log('load')
  this.console.log("referrer：", this.document.referrer);
  this.console.log('oringin：', this.document.origin);
  this.console.log('location:',this.document.location);
  
})

// 离开或刷新页面时触发
window.addEventListener('unload', function (event) {
  this.console.log('leave')
})

window.addEventListener('loadstart', function (event) {
  this.console.log('load start')
})
window.addEventListener('loadend', function (event) {
  this.console.log('load end')
})