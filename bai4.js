/* 1/ Xây dựng lớp Animal với các: 
Thuộc tính: tên và cân nặng
Phương thức:
•	setName(): để thiết đặt giá trị mới cho thuộc tính tên theo giá trị của tham số truyền vào.
•	setWeight(): để thiết đặt giá trị mới cho thuộc tính cân nặng theo giá trị của tham số truyền vào.
•	getName(): trả về tên của animal
•	getWeight(): trả về cân nặng của animal
•	toString() trả về chuỗi chứa thông tin của tên và cân nặng
2/ Sử dụng lớp Animal vừa định nghĩa để xây dựng một chương trình JavaScript với kịch bản như sau:
•	Tạo đối tượng  có tên là objAnimal1 
•	Thiết đặt tên cho đối tượng objAnimal1 là “Elephant”
•	Thiết đặt cân nặng cho đối tượng objAnimal1 là 45.6
•	Gọi phương thức toString() 
•	Tạo đối tượng có tên là objAnimal2 sử dụng phương thức khởi tạo có 2 tham số là tên và cân nặng
•	Đổi tên cho đối tượng objAnimal2 thành “Mouse”
*/

class Animal {
    constructor(names,weight) {
        this.names = names;
        this.weight = weight;
}
    setNames(names) {
        this.names = names;
    }
    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return names
    }

    getWeight() {
        return weight
    }
    toString() {
        console.log('Tên của class: ' + this.names + ", cân nặng :" + this.weight)
    }
}

let objAnimal1 = new Animal()

let objAnimal2 = new Animal()
objAnimal1.setNames('Elephant');
objAnimal1.setWeight(45.6);
objAnimal1.toString();


objAnimal2.setNames('Mouse');
objAnimal2.setWeight(30);
objAnimal2.toString();


