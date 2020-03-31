//这个配置文件就是js文件，通过node模块操作，向外暴露一个配置对象

const path = require('path')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),//入口，表示用webpack打包哪个文件
    //输出文件的配置，指定打包好的文件要输出到哪个目录中去
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'//指定输出的文件的名称
    }
    //使用webpack-dev-server来实现自动编译
    //运行npm i webpack-dev-server -D,把这个工具安装到本地依赖
}