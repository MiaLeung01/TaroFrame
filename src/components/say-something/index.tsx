
import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'

interface Props {
  /** 要说的话 */
  text: string
  /** 是否显示 */
  show: boolean
}

function SaySomething (props: Props) {
  return (
    <View>
      {props.show && <Text>{props.text}</Text>}
    </View>
  )
}

export default SaySomething