import React, { useState, useEffect } from 'react'
import Taro, { useRouter, useReady, useDidShow, useDidHide } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

import progress from '../../components/progress/index'


export default function Index() {

  /** react hooks 的方法 */
  const [text, setText] = useState('hello')
  const [showText, setShowText] = useState(false)
  useEffect(() => {
    console.log('component didmount')
  }, [])
  
  /** 小程序一些生命周期 */
  /** 路由 */
  const router = useRouter()
  console.log('router', router)

  /** 相当于 小程序 onReady  */
  useReady(() => {
    console.log('ready')
  })

  /** 相当于 小程序 onShow  */
  useDidShow(() => {
    console.log('did show')
  })

  /** 相当于 小程序 onHide  */
  useDidHide(() => {
    console.log('did hide')
  })

  const sayGoodBye = () => {
    setText('Say Goodbye')
    Taro.showToast({
      title: 'say good bye'
    })
    setShowText(true)
  }

  return (
    <View>
      {/* <Text>{text}</Text>
      <View onClick={sayGoodBye}>说再见</View>
      <SaySomething text="说话了" show={showText}/> */}
      {/* <Image src="../../images/bg.jpg" /> */}
      <progress per={50}/>
    </View>
  )
}
