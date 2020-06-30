# 项目说明
- 一些实用的web功能
- 脚手架：create-react-app
- 组件库：antd 
- 状态管理：redux
- 中间件：redux-saga

## 文件目录
```
    ├── package.json  
    ├── src 
    │── .gitignore
    │── README.md 
```

## 初始化
```
    npx create-react-app your-project-name --typescript
    yarn add antd
    yarn start
```
### 如果你发现运行提示说没有ts环境
```
    添加如下命令：cnpm install --save typescript @types/node @types/react @types/react-dom @types/jest -D
```
### 关于yarn start以后控制台报错 => react使用antd警告:Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance
- [关于React.StrictMode官方解释](http://react.html.cn/docs/strict-mode.html)
```js
    /* 找到index.tsx */
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

    /* 修改成 */
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
```

    