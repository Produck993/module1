/*Viết hàm đếm số ký tự nguyên âm trong một chuỗi cho trước. 
Hàm có 1 tham số truyền vào mà một mảng các ký tự. Hàm trả về false nếu không có ký tự nguyên âm nào. 
Viết chương trình nhập vào một chuỗi bất kỳ. Gọi hàm tìm số ký tự nguyên âm vừa xây dựng ở trên.
Nguyên âm là các ký tự: a, o, e, u, i */
let input1 = prompt("Nhập kí tự nguyên âm")


function nguyenam(input) {
    let count = 0
    for ( let i = 0; i < input.length; i ++) {
        
        if (input[i] == 'a' ) {
            count +=1
        } else if ( input[i] == 'o' ) {
            count +=1
        } else if (input[i] == 'e' ) {
            count+=1
        } else if ( input[i] == 'u' ) {
            count +=1
        } else if ( input[i] == 'i') {
            count+=1
        }
    } return count
    
}
nguyenam(input1);
console.log(nguyenam(input1))