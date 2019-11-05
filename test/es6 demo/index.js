//let schoolname = "河北传媒学院";
//console.log('您好'+schoolname+'欢迎您');
//console.log(`您好,${schoolname}欢迎您`);
// let showInfo =`您好,${schoolname}欢迎您`;
// document.write(showInfo);

// let a=12;
// let b=5;
// let result = `${a*b}`;
// document.write(result);

//let a="河北";
//let b="1111河北传媒学院1111";
//let result = b.includes(a);//b中是否包含a
//document.write(result);//true

//let result = b.startsWith(a);//b中是否以a开头
//let result = b.endsWith(a);//b中是否以a结尾
//document.write(result);//false

//document.write("abc".repeat(3));

//二进制数
let binary=0b0101;
console.log(binary);//5

//八进制
let octar=0o777;
console.log(octar);//511

//判断是否为数字
console.log(Number.isFinite("binary"));//false

//NaN:not a number,非数值
// NaN 不是有限的
console.log(Number.isFinite(NaN));//false

//判断数值是否为NaN
// Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN('true'/0)); //true
console.log(Number.isNaN("NaN"));//falue
console.log(Number.isNaN(undefined));//false
console.log(Number.isNaN({}));//false

//字符串转成整数
//let a = Number.parseInt("123");//123
//let a = Number.parseInt("123.12");//123
//let a = Number.parseInt("123.92");//123
//console.log(a);

//let a = Number.parseInt('0101',2);//5
//let a = Number.parseInt('123.01');//123
//console.log(a);

//求平方
console.log(Math.pow(5,2));

//求立方根
console.log(Math.cbrt(5,3));

//




// 一.搭建环境
// 1.新建一个ES6文件夹，VSCODE引入工作区
// 2.新建两个文件夹，src/dist
// src:书写ES6代码的文件夹
// dist:利用babel编译成ES5代码的文件。在html页面需要引入这里的js文件
// 3.新建index.html
// 4.npm init -y
// 5.安装babel,执行 npm install -g babel-cli -save
// 6.终端执行：npm install --save-dev babel-preset-es2015 
// 7.根目录新建.babelrc文件，内容如下：
// {
//     "presets": [
//         "es2015"
//     ],
//     "plugins": []
// }
// 8.在src下的index.js文件中写es6代码
// 9.babel ./src/index.js -o ./dist/index.js //把es6转成es5
// 10.修改package.json 文件
// script:节点下加如下内容：
// "build":"babel ./src/index.js -o ./dist/index.js"
// 终端执行：npm run build
// Var let const
// //ES6以前版本只用var声明变量
// //var 全局变量
// //let 区域块
// //const 常量

// //const
// const schoolname="河北传媒学院";
// var schoolname="铁道大学";  //Duplicate declaration "schoolname"
// //schoolname="铁道大学";  //"schoolname" is read-only
// /*
// for(var j=0;j<5;j++){
//     console.log(j); //0-4
// }

// console.log(j); //5
// for(let i=0;i<5;i++){
// console.log(i); //0-4
// }
// console.log(i); //not defined
// */
// 解构赋值 
// let{String:name}={String:"123"};
// console.log(name);
// //undefined  null 区别
// Undefined 未定义，没有这个变量
// Null,有变量，变量的值就是null

// 扩展运算符
// 示例1
// function test(...params){
//     console.log(params.length);
//  
// }
// test(1,2);
// 示例2：
// //对象扩展运算符
// var arr1=[1,2,3];
// var arr2=[...arr1];
// console.log(arr1);
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
// 示例3 Rest 运算符
// function test(first,...params){
//     
//     // for(let i=0;i<params.length;i++){
//     //     console.log(params[i]);
//     // }

//     //es6中用for of代替
//     for(let val of params){
//         console.log(val);
//     }
// }
// test(0,1,2,3,4,5,6,7,8,9);
// 字符串模板
// Live server是一个具有实时加载功能的小型服务器，可以使用它来破解html/css/js文件，但是不能用于部署最终站点。也就是说我们可以在项目中实时用它查看开发的网页或项目效果。
// 示例1：使用连接符号
//  let schoolname="河北传媒学院";
// console.log('您好'+schoolname+'欢迎您');
// let showInfo=`你好，${schoolname}欢迎你`;
// document.write(showInfo);
// 示例2：连接符号还支持算数运算符
// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);
// 示例3：字符串查找
// let a="河北";
// let b="123231河北传媒学院12323123";
// //let result=b.includes(a);//b 中是否包含a
// //let result=b.startsWith(a); //b是否以a开头
// //let result=b.endsWith(a); //b是否以a结尾
// //document.writeln(result);
// document.write("abc".repeat(3));
// 数字操作
// 示例1：
//     //二进制数
//     let binary=0b0101;
//     console.log(binary);

//     //八进制数
//     let octar=0o777;
//     console.log(octar);

//     //判断是否为数字
//     console.log(Number.isFinite("binary"));
//     
//     //NaN //not a number ,非数
//     console.log(Number.isFinite(NaN));

// 示例2：
// //判断值是否为NaN
//     console.log(Number.isNaN(NaN)); //true
//     console.log(Number.isNaN('true'/0)); //true
//     console.log(Number.isNaN("NaN")); //false
//     console.log(Number.isNaN(undefined)); //false
//     console.log(Number.isNaN({}));  //false
// 示例3：
//     //字符串转成整数
//    //let a= Number.parseInt("123");
//    //let a= Number.parseInt("123.92");
//    //console.log(a); //123
//    //let a= Number.parseInt('0101',2);
//    let a=Number.parseFloat('123.01');
//    console.log(a); //5

//    //求平方
//    console.log(Math.pow(5,3));
// 示例4：
//判断 数字的符号

console.log(Math.sign(2));//1
console.log(Math.sign(-2));//-1
console.log(Math.sign(-0)); //-0
console.log(Math.sign(0));//0

// Json 数组
// 示例1。Array.from();
// let jsonArray={
//     '0':'传媒学院',
//     '1':'学习ES6',
//     '2': 2,
//     length:3 //一个类数组对象必须有length属性
// }

// //转换成数组
// let arr1=Array.from(jsonArray);
// console.log(arr1);
// 示例2：Array.of();
// let arr1=Array.of(1,'abc',33);
// console.log(arr1);
// 示例3 find()
// let  arr=[1,2,3,4,5,6,7,8];
// let result=arr.find(value=> value>5);
// console.log(result);

// 示例4：fill()
// //fill()  将一定范围索引的数组元素内容填充为单个指定的值 
// let arr=['q','b','c'];
// arr.fill('a',0,3); //'a'是要替换的内容，0，从第几位开始，3，替换几位
// console.log(arr);
// 示例5：arr.keys() ,arry.values()和arr.entries()
// let arr=['a','b','c'];
// for(let val of arr.values()){
//     console.log(val);
// }

// ES6中的箭头函数和扩展
// 示例1：函数默认值，throw 异常
// function add(a,b=1){
//     if(a==0){
//         throw new Error("a is zero");
//     }
// return a+b;
// }
// console.log(add(0));
// 示例2：严谨模式
// //es5 严谨模式只能放在文件的第一行，
// //es6中可以放在函数体中，函数不能有默认值 
// function add(a,b){
//     'use strict'
//  return a+b;
// }


// 示例3：//箭头函数中不能使用new
// let add=()={
//     //箭头函数中不能使用new
// }
// 示例4：对象的函数解析json
// let json={
//     name:'zhangsan',
//     age:7
// }

// function fun(name,age){
//     console.log(name,age);
// }

// fun(json);
// 示例5：
// let arr=['a',1,'b','c'];
// function fun(a,b,c){
// console.log(a,b,c);
// };
// fun(...arr);
// 示例6：in
// let person={
//     name:'zhangsan',
//     age:7
// }
// console.log("name" in person);
// 示例7数组遍历
// let arr=['a',1,'b'];
// //arr.forEach((val,index)=>console.log(val,index))
// //arr.map(x=>console.log(x));
// //arr.filter(x=>console.log(x))不常用
// //arr.some(x=>console.log(x))//不常用
// console.log(arr.toString());
// console.log(arr.join('|'));
// ES6中的对象
// 示例1：
// let name="zhangsan";
// let age=6;
// let person={name,age};
// console.log(person);
// 示例2：key值的构建
// let key="name";
// let person={
//     [key]:'zhangsan',
//     age:6
// }
// console.log(person);
// 示例3：is()
// let person1={name:'zhangsan'}
// let person2={name:'zhangsan'}
// // console.log(person1.name === person2.name); //true
// // console.log(Object.is(person1.name , person2.name)); //true

// //"==" 与is的区别
// //==判断的是值的相等
// //is 是严格相等
// console.log(+0===-0); //
// console.log(Object.is(+0,-0));//
// 示例4：assign()
// let person1={name:'zhangsan',age:8};
// let person2={age:7}
// let person3={sex:"female"}
// let person4=Object.assign(person1,person2,person3);
// console.log(person4);
// Symbol在对象中的作用
// 示例1：
// let a=new String(); 
// let b= new Number();
// let c=new Object();
// let d=new Array();
// let e=new Boolean();
// let f=Symbol();
// console.log(typeof(a)); //a-e object
// console.log(typeof(f));
// 示例2：
// let a=Symbol("abc");
// console.log(a); //红色说明A是一个symbol类型
// console.log(a.toString()); //黑色string
// 示例3：symbol在对象中的作用
// let obj={name:'zhangsan',age:6};
// let sex=Symbol();
// obj[sex]='female';

// for(let key in obj){
//     console.log(obj[key]);
// }

// console.log(obj[sex]); //symbol起到一定的保护作用。
// Set 和weakset
// //set中不允许存在重复项
// let setArr=new Set(["a","b",'c',1]);
// //增 删 查
// setArr.add('f');

// setArr.delete('f');

// console.log(setArr.has('b1'))
// //setArr.clear();
// //console.log(setArr);
// //遍历
// // for(let item of setArr){
// //     console.log(item);
// // }
// setArr.forEach(x=>console.log(x));

// 示例2：weakSet
// let weakset =new WeakSet();
// var person1={name:'zhangsan',age:7};
// var person2={name:'zhangsan',age:7};
// weakset.add(person1);
// weakset.add(person2);

// console.log(weakset);
// Map数据结构
// let person ={
//     name:'zhangsan',
//     age:7
// }

// let map=new Map();  //key,value
// map.set("person1",person);
// map.set("person2",person);
// map.set("test","123");
// console.log(map);
// //取数据
// console.log(map.get("test"));
// // map.delete("test");
// // map.clear();
// console.log(map.size);
// //遍历map
// // for(let [key,value] of map){
// //     console.log(key);
// //     console.log(value);
// // }

// map.forEach(value=>console.log(value));
// //查
// console.log(map.has("test"));
// 用proxy进行预处理
// 示例1：
// let pro = new Proxy({
//     add(a, b) {
//         return a + b;
//     },
//     name: 'zhangsan'
// }, {
//     get:function (target, key, property) {
//         console.log("enter get Method");
//         return target[key]
//     },
//     set:function (target, key,value, receiver) {
//         console.log("enter set method");
//         console.log(`${target}=${value}`);
//         return target[key]=value;
//     }
// });

// console.log(pro.name='lisi');
// console.log(pro.add(1,2));
// console.log(pro.name);
// 示例2：
// let target=function (){
//     return "this is target Method";
// }

// let handler={
//     apply:function(target,ctx,args){
//         console.log("do apply");
//         return Reflect.apply(...arguments);
//     }
// }
// let pro=new Proxy(target,handler);
// console.log(pro())
// Promise对象的使用
// //1.起床 2.洗脸 3，吃早饭
// let state=1;
// //
// function getup(resolve,reject) {
//     console.log("1.开始起床");
//     if(state==1){
//         resolve("起床成功");
//     }else{
//         reject("起床失败");
//     }
// }

// function WashFace(resolve,reject) {
//     console.log("2.开始刷牙洗脸");
//     if(state==1){
//         resolve("刷牙洗脸成功");
//     }else{
//         reject("刷牙洗脸失败");
//     }
// }

// function haveBreakFast(resolve,reject) {
//     console.log("3.开始吃早饭");
//     if(state==1){
//         resolve("吃早饭成功");
//     }else{
//         reject("吃早饭失败");
//     }
// }

// new Promise(getup).then(
//     function(value){
//         console.log(value);
//         return new Promise(WashFace);
//     }
// ).then(
//     function(value){
//         console.log(value);
//         return new Promise(haveBreakFast);
//     }
// ).then(
//     function(value){
//         console.log(value);
//     }
// )
// 十五．Class类的作用
// 示例1：
// class Person{
// //构造方法 
// constructor(name='123',age=5){
// this.name=name;  //属性
// this.age=age;
// }
// //普通方法
// introSelf(){
//     return `my name is ${this.name}, my age is ${this.age}`
// }

// }

// let person=new Person("zhangsan",6);
// let person1=new Person("lisi",6);
// let person2=new Person();
// console.log(person.introSelf());
// console.log(person1.introSelf());
// console.log(person2.introSelf());



















