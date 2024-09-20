- Phiên bản ES6 mới về bản cũ

+ Dùng babel để chuyển đổi ES6 sang ES5

- Cài đặt

```bash
npm i @babel/core @babel/preset-env babel-loader --save-dev
```
+ @babel/core: Core của babel
+ @babel/preset-env: Để chuyển đổi ES6 sang ES5
+ babel-loader: Để sử dụng babel với webpack

- Cấu hình `webpack.config.js`

```javascript
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

- bundler
+ webpack
+ browserify
+ parcel
+ gulp

- Run

```bash
./node_modules/.bin/webpack --config ./webpack.config.js --mode=development
```

- Task Runner

+ gulp
+ grunt
+ npm scripts
