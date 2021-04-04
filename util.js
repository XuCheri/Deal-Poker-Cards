/*
 * @Author: your name
 * @Date: 2021-04-02 18:26:52
 * @LastEditTime: 2021-04-04 10:03:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web work\模块化\CommonJS练习\util.js
 */
module.exports = {
    sortRandom(arr) {
        arr.sort(function (a, b) {
            return Math.random() - 0.5;
        })
    },
    print: function (pokers) {
        var str = "";
        for (var i = 0; i < pokers.length; i++) {
            var p = pokers[i];
            str += p.toString() + "   ";
        }
        console.log(str);
    }
}