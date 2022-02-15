
var express = require('express');
var app = express();

var bodyParser = require('body-parser');	// 모듈 import. Express v4.16.0이상은 생략 가능

app.use(bodyParser.json());	// json 등록
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', function (req, res) {
    var template = 
    `<!DOCTYPE html>
    <html>
        <body>
            <form action='/add' method='post'>
            Num1 : <input type='text' name='num1'><br>
                Num2 : <input type='text' name='num2'><br>
                <input type='submit' value='plus'>
            </form>
            <form action='/minus' method='post'>
            Num1 : <input type='text' name='num1'><br>
                Num2 : <input type='text' name='num2'><br>
                <input type='submit' value='minus'>
            </form>
            <form action='/multi' method='post'>
            Num1 : <input type='text' name='num1'><br>
                Num2 : <input type='text' name='num2'><br>
                <input type='submit' value='multi'>
            </form>
            <form action='/div' method='post'>
            Num1 : <input type='text' name='num1'><br>
                Num2 : <input type='text' name='num2'><br>
                <input type='submit' value='div'>
            </form>
        </body>
    </html>`;
    res.writeHead(200, {'ContentType':'text/html'});
    res.write(template);
    res.end();
});

app.post('/add',function (req, res) {
    var body = req.body;
    console.log(body);
    var result = Number(body.num1) + Number(body.num2)
    res.send(body.num1 + " + " + body.num2 + " = " + result);
 });

app.post('/minus',function (req, res) {
    var body = req.body;
    console.log(body);
    var result = Number(body.num1) - Number(body.num2)
    res.send(body.num1 + " - " + body.num2 + " = " + result);
 });

 app.post('/multi',function (req, res) {
    var body = req.body;
    console.log(body);
    var result = Number(body.num1) * Number(body.num2)
    res.send(body.num1 + " X " + body.num2 + " = " + result);
 });

 app.post('/div',function (req, res) {
    var body = req.body;
    console.log(body);
    var result = Number(body.num1) / Number(body.num2)
    res.send(body.num1 + " / " + body.num2 + " = " + result);
 });

app.listen(7777);