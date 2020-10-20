import * as fs from 'fs'
import console = require('console')

const INCLUDE_SUFFIX = ['.png', '.jpg', '.gif', '.svg']

const getAllImagesName = () => {
  const list = fs.readdirSync('src/images').filter((file) => {
    if(INCLUDE_SUFFIX.some(suf => file.endsWith(suf))) {
      return file
    }
  })
  return Array.from(new Set(list))
}

const generate = () => {
  const string = getAllImagesName().map(el => {
    return `import './${el}'`
  }).join('\n')

  fs.writeFileSync('src/images/index.ts', string, 'utf8')
  console.log('引入图片资源成功！')
}

generate()