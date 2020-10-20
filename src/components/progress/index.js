//index.js

/** 进度条div 个数 */
const N = 50
const List = Array.from({ length: N }, (v, k) => ({
  id: k,
  color: 'rgb(235, 235, 235)'
}))

/** 颜色值 */
const R = 228
const G = 55
const B = 37
// 渐变色 rgb 计算公式
// Gradient = A + (B-A) / Step * N

Component({
  attached: function () {
    // 在组件实例进入页面节点树时执行
  },
  ready: function() {
    const progressNum = N * this.properties.per / 100
    for (let i = 0; i <= progressNum; i++) {
      setTimeout(() => {
        const color = `rgb(${R + (255-R)/N*(N-i)}, ${G+(255-G)/N*(N-i)}, ${B+(255-B)/N*(N-i)})`
        const list = [...this.data.dataList]
        list[i].color = color
        this.setData({
          dataList: list,
        })
      }, 500 * i)
    }

    for (let j = 0; j<=this.properties.per; j++) {
      setTimeout(() => {
        this.setData({
          count: {
            val: j,
            color:  `rgb(${R + (255-R)/N*(N-j)}, ${G+(255-G)/N*(N-j)}, ${B+(255-B)/N*(N-j)})`
          }
        })
      }, 500 * progressNum / this.properties.per * j)
    }
  },
  properties: {
    // 传给组件的参数
    per: {
      type: Number,
    },
  },
  data: {
    // 组件内部参数
    dataList: List,
    count: {
      color: 'rgb(255, 255, 255)',
      val: 0,
    },
  },
  observers: {
  },
  methods: {
    // 内部方法
  }
})
