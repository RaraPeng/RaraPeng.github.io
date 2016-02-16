var answer;

function ReStart() {
    document.gNum.guess.value = "";
    Start();
}

function Start() {
    //RND();
    getRandom();
    getRandomArray();
    document.chk.ans.value = "";
}

function getRandom() { //取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
    return Math.floor(Math.random() * 10);
}

function getRandomArray() { //隨機產生不重覆的n個數字
    var ans = [4]; //儲存產生的陣列

    for (var i = 0; i < 4; i++) {
        var rdm = 0; //暫存的亂數

        do {
            var exist = false; //此亂數是否已存在
            rdm = getRandom(); //取得亂數

            //檢查亂數是否存在於陣列中，若存在則繼續回圈
            if (ans.indexOf(rdm) != -1) exist = true;

        } while (exist); //產生沒出現過的亂數時離開迴圈

        ans[i] = rdm;
    }
    answer = ans[0].toString() + ans[1].toString() + ans[2].toString() + ans[3].toString();
    return answer;
}

//有沒有數字；index相同嗎？
function Check() {
    var aCount = 0;
    var bCount = 0;
    for (var i = 0; i < answer.length; i += 1) {
        for (var j = 0; j < document.gNum.guess.value.length; j += 1) {
            if (answer[i] === document.gNum.guess.value[j]) {
                if (i === j)
                    aCount += 1;
                else
                    bCount += 1;
            }
        }
    }
    document.chk.ans.value = document.gNum.guess.value + "    " + aCount + "A" + bCount + "B";
    if (aCount === 4){
        alert("Congragulations!");
    }
    document.gNum.guess.value = "";
    aCount = 0;
    bCount = 0;
}
