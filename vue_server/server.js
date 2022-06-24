const express = require('express') //引入express 模块
const app = express()              // 创建 web 服务器    为服务器添加监听事件
const mysql = require('mysql');
const history = require('connect-history-api-fallback');

app.use(history()).use(express.static(__dirname+'/static'));

// 建立与 mysql 的连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'blog'
});

app.get('/', (req, res) => {
    // 查询所有文章
    db.query(`SELECT * FROM blog_article`, (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
});

app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});