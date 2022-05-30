/*Câu 2: Xây dựng hàm trả về vị trí của phần tử cần tìm
 trong một mảng cho trước (Giả sử tất cả các phần tử trong
     mảng không giống nhau). Hàm có 2 tham số: số phần tử
      cần tìm, mảng cho trước. 
Viết chương trình với một mảng số nguyên được khởi tạo 
trước. Nhập vào một giá trị bất kỳ, sau đó kiểm tra xem
 giá trị số nguyên bất kỳ vừa nhập có nằm trong mảng
  đã nhập hay không. */
  let input = +prompt("Nhập vào số nguyên")
    let flag = false
  function songuyen(a) {
      let array = [1,3,5,9,8,12,23,15,19,24,32,2,4]
      for ( let i = 0; i < array.length; i ++) {
          if (a == array[i]) {
            document.write("Số nguyên nhập có trong mảng là : " + a + " Ở vị trí " + i)
            flag = true ;
            break;
          } 
      } if (flag == false) {
          document.write("Đây không phải là số nguyên nằm trong mảng")
      }      
  }
songuyen(input);
