#! /usr/bin/env node

const importLocal = require('import-local')
// 远程和本地同时存在时，使用本地版本
if(importLocal(__filename)){
  require('npmlog').info('cli', '正在使用本地版本')
} else {
  require('../lib/index')
}
