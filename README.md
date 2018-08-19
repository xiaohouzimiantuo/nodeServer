# nodeServer for api

#### Project introduction(项目介绍)
Using node to write server-side code is mainly to provide interface calls for the front-end, the source file is in the SRC directory, compiled in the Lib folder

Run the service directly with NPM run dev

Because this project uses ES6 syntax, you need to run an additional compiled program, NPM run Babel

The two commands run together to achieve the code's hot update.


使用node编写服务端代码，主要是为前端提供接口调用，源文件是在src目录，编译以后在lib文件夹里
运行服务时直接npm run dev
由于此项目使用es6的语法，所以开发时需要多运行一个编译的程序，npm run babel 
两个命令一起运行实现代码的热更新

#### Software architecture(软件架构)
controller->Corresponds to the business logic of each interface.
iverry->Mount the ive object in the global context and use the encapsulated method.
router->Routing implementation
essapp->Entry document of project

controller->对应每个接口的业务逻辑
iverry->挂载ive对象在全局，使用其中封装的方法
router->路由的实现
essapp->项目的入口文件


#### Instructions(使用说明)

1. Global install node
2. Global install supervisor & babel-cli
3. Running in projects npm install (Download dependency)
4. Running in projects npm run dev (Running project)

1. 全局安装node
2. 全局下载 supervisor babel-cli
3. 在项目中运行npm install 下载依赖
4. 在项目中运行npm run dev 运行项目





