#  hummer-sass
hummer 取为“蜂鸟”之名。基于[sass](http://sass-lang.com/)书写的一套针对PC站点sass库；为前端人员提供了一些基础的重置、常用的mixin等；基于它你可以扩展出更多你需要的组件。


## 项目目录
```
├── README.md
├── _base.scss      
├── _function.scss
├── core
├── package.json
└── test
```


### 开始使用

* 首页确保系统中已经安装 [git](https://git-scm.com/) 或 [node](https://nodejs.org/en/)
* 然后克隆项目到本地项目中 or 使用 npm install

```
> $ git clone https://github.com/tongao/hummer-sass.git
```
* 使用
```
@import 'hummer-sass/base';
or
@import 'hummer-sass/function';        
```
or
```
> $ npm i hummer-sass --save-dev
```
* 使用
```
@import 'node_modules/hummer-sass/base';
or
@import 'node_modules/hummer-sass/function';        
```
### 使用方法

* 进入test目录打开index.html
```
> $ cd test && open index.html
```
### 自写测试
* 进入test目录键入如下命令:
```
> $ npm i && gulp
```

# License
[ISC](https://github.com/tongao/hummer-sass/issues)
