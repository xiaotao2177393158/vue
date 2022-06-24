// 回文数
// 如果是负数 则一定不是回文数  如果是正数 则计算其倒叙数字是否相等
let isPalindrome = function(x) {
    if (x < 0) return false;
    let cur = 0;
    let num = x;
    while(num != 0) {
        cur = cur * 10 + num % 10;
        console.log('cur', cur);
        num = Math.floor(num / 10);
        console.log('num', num);
    } 
    return cur == x;
}
console.log(isPalindrome(12521));


// 数字转罗马数字
let intToRoman = function(num) {
    let map = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    let result = '';
    let cur = 1;
    while(num) {
        let current = num % 10
        if (current < 4) {
            result = map[cur].repeat(current) + result
        } else if (current === 4) {
            result = map[cur] + map[cur * 5] + result
        } else if (current > 4 && current < 9) {
            result = map[cur * 5] + map[cur].repeat(current - 5) + result
        } else {
            result = map[cur] + map[cur * 10] + result
        }
        cur *= 10
        num = Math.trunc(num/10)
    }
    return result;
}
console.log(intToRoman(3996));
console.log(intToRoman(3997));
console.log(intToRoman(3998));
console.log(intToRoman(3999));
console.log(intToRoman(3990));