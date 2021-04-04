/*
 * @Author: your name
 * @Date: 2021-04-02 18:26:28
 * @LastEditTime: 2021-04-04 10:04:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web work\模块化\CommonJS练习\index.js
 */
var pokers = [];
const Poker = require("./poker.js");
const util = require("./util.js")
for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
        pokers.push(new Poker(j, i))
    }
}
pokers.push(new Poker(null, 14), new Poker(null, 15));
util.sortRandom(pokers);
util.print(pokers)


var player1 = pokers.slice(0, 17);
var player2 = pokers.slice(17, 34);
var player3 = pokers.slice(34, 51);
var desk = poker.slice(51);


console.log("玩家1：")
util.print(player1);

console.log("玩家2：")
util.print(player2);

console.log("玩家3：")
util.print(player3);

console.log("桌面：")
util.print(desk);