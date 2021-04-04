/*
 * @Author: your name
 * @Date: 2021-04-02 18:26:40
 * @LastEditTime: 2021-04-04 09:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web work\模块化\CommonJS练习\poker.js
 */
function poker(color, number) {
    this.color = color;
    this.number = number;
}

poker.prototype.toString = function () {
    var str = "";
    //花色：♣、♥、♦、♠
    if (this.color === 1) {
        str = "♣"
    } else if (this.color === 2) {
        str = "♥";
    } else if (this.color === 3) {
        str = "♦";
    } else {
        str = "♠"
    }
    //牌面
    if (this.number >= 2 && this.number <= 10) {
        str += this.number;
    } else if (this.number === 1) {
        str += "A";
    } else if (this.number === 11) {
        str += "J";
    } else if (this.number === 12) {
        str += "Q";
    } else if (this.number === 13) {
        str += "K";
    } else if (this.number === 14) {
        str = "joker";
    } else if (this.number === 15) {
        str = "JOKER";
    }
    return str;
}

module.exports = poker;