// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요. (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
const inputNum = 1;

function 소수판별기(num) {
    if (num === 1) {
        return console.log('NO');
    }
    if (num % 1 == 0 && num % num == 0) {
        console.log('YES');
    } else {
        console.log('NO');

    }
}

소수판별기(inputNum)