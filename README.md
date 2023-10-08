1. cra 初始化项目

2. 自定义（覆盖）webpack 配置 craco
  2.1 安装 
      npm i -D @craco/craco
  2.2 配置文件
      demo
        node_modules
        craco.config.js   +
        package.json
  2.3 package.json
      "scripts": {
        - "start": "react-scripts start",
        * "start": "craco start",
        - "build": "react-scripts build",
        * "build": "craco build",
        - "test": "react-scripts test",
        * "test": "craco test",
      },

3. tailwindcss
    npm install -D tailwindcss
    npx tailwindcss init

4. jsconfig.json 配置路径别名的映射

5. UI 库的配置

6. 请求库的配置

// 可执行文件
  webpack => 去环境变量中Path去匹配路径寻找webpack这个可执行文件