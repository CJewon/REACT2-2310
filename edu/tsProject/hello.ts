let 나이 = 30;

console.log(typeof(나이))


function hello(이름 : string) {
    console.log(`hello! ${이름}`)
}

function 출생년도계산기(입력나이 : number):number {
    return  2023 - 입력나이;
}

function 출생년도출력(출생년도 : number) {
    console.log(출생년도);
}

출생년도출력(출생년도계산기(나이))

hello("김철수");
