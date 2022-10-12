function test(mm, yyyy) {
    if (mm === 2 && 윤년판단(yyyy)) {
        // answer(yyyy, mm, dd, 29);
        console.log("윤년");

    }
    if (mm === 2 && !윤년판단(yyyy)) {
        // answer(yyyy, mm, dd, 28);
        console.log("윤년아님");

    }

    function 윤년판단(yyyy) {
console.log(yyyy);

        return ((yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0);
    }
}

function 윤년판단2(yyyy) {     if (yyyy % 4 === 0 && yyyy % 100 != 0 || yyyy %
400 === 0) {         return true;     } else {         return false;     } }
test(2,2021)
test(2, 2020)
//console.log(윤년판단(2020));