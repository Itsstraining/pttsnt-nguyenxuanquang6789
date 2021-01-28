/**Nội dung đề bài:
  Tương truyền rằng: Mọi số tự nhiên đều có thể biến đổi trở thành một dãy các phép nhân
giữa những con số nguyên tố.Thật vậy, chúng ta có thể xem xét một số ví dụ về chân lý trên.
Ví dụ:
21 = 3 * 7
35 = 5 * 7
100 = 2 * 2 * 5 * 5…
Có thể thấy, các con số trong dãy phép nhân đều là những con số nguyên tố.
Số nguyên tố là những con số chỉ chia hết cho 1 và chính nó.
Bạn hãy in ra dãy các con số nguyên tố được nhân với nhau để tạo thành con số cho trước.

Input và Output mẫu:
    Input
21
35
100
Output
3 7
5 7
2 2 5 5
**/


// Add new functions, variables here

function main(input) {
    let n = input;
    let arr = [];

    if (n == 1) {
        console.log(n);
        return 1;
    }

    if (n == 0) {
        console.log(n);
        return 1;
    }

    if (check(n) == false) {
        console.log(n);
        return 1;
    }
    for (i = 2; i <= n; i++) {
        if (n % i == 0) {
            if (check(i) == true) {
                arr.push(i);
                n = n / i;
                i = 1;
            }
        }
    }
    console.log(arr.join(' '))
}

function check(n) {
    let count = 0;

}

module.exports = main;