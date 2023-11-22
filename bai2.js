// Khởi tạo một class chứa hàm tính chu vi và diện tích hình chữ nhật.
class HinhChuNhat {
  constructor(chieuDai, chieuRong) {
    this.chieuDai = chieuDai;
    this.chieuRong = chieuRong;
  }

  tinhChuVi() {
    return 2 * (this.chieuDai + this.chieuRong);
  }

  tinhDienTich() {
    return this.chieuDai * this.chieuRong;
  }
}
const hcn = new HinhChuNhat(5, 6);
console.log("Chu vi:", hcn.tinhChuVi());
console.log("Diện tích:", hcn.tinhDienTich()); // 

/// Khởi tạo class và truyền giá trị các cạnh vào class để tính chu vi và diện tích hình.
class HinhChuNhat {
  constructor(chieuDai, chieuRong) {
    this.chieuDai = chieuDai;
    this.chieuRong = chieuRong;
  }
  tinhChuVi() {
    return 2 * (this.chieuDai + this.chieuRong);
  }
  tinhDienTich() {
    return this.chieuDai * this.chieuRong;
  }
}
const hinhCN = new HinhChuNhat(4, 5); // Thay đổi giá trị chiều dài và chiều rộng tại đây
const chuVi = hinhCN.tinhChuVi();
const dienTich = hinhCN.tinhDienTich();

console.log("Chu vi của hình chữ nhật là: " + chuVi);
console.log("Diện tích của hình chữ nhật là: " + dienTich);


class Hinhtron{
  constructor(bankinh,duongkinh){
    this.bankinh = bankinh;
    this.duongkinh = duongkinh;
  }
  tinhchuvi(){
    return this.duongkinh * 3.14;
  }
  tinhchuvinuatrong(){
    return this.bankinh * 3.14;
  }
  tinhdientich(){
    return 3.14*((this.bankinh)^2)
  }
}
const hinhtron = new Hinhtron(3,4);
const chuvi = hinhtron.tinhchuvi();
const nuatron = hinhtron.tinhchuvinuatrong();
const dientich = hinhtron.tinhdientich();
console.table("chu vi hinh tron:" + chuvi);
console.table("chu vi nua tron:" + nuatron);
console.table("dientich hinh tron:" + dientich);



