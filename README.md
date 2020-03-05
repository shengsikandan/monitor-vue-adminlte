# 项目背景
最近在了解AdminLTE,感觉其在响应式界面和UI上都非常不错，继承了Bootstrap的一贯风格。但是在业务开发中需要用到Vue.js，于是基于Vue.js 2.x 配置了 AdminLTE 2 方便以后开发时使用。

![预览图](./src/static/img/preview.png "vue-adminlte")
----------------

## 项目运行步骤：

**1. 插件安装**

    npm install

**2. 运行项目**

    npm run serve

**3. 打包项目**

    npm run build

> 页面显示动画是在App.vue中定义了一个全局的css3样式，然后在页面中的根节点加入对应的class类名就可以了，相应的动画效果可以自定义修改，也可以使用Vue自带的动画。
