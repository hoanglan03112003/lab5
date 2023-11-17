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

// Sử dụng class để tính chu vi và diện tích
const hcn = new HinhChuNhat(4, 5);
console.log("Chu vi:", hcn.tinhChuVi()); // Output: 18
console.log("Diện tích:", hcn.tinhDienTich()); // Output: 20

///
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

// Sử dụng class HinhChuNhat
const hinhCN = new HinhChuNhat(4, 5); // Thay đổi giá trị chiều dài và chiều rộng tại đây
const chuVi = hinhCN.tinhChuVi();
const dienTich = hinhCN.tinhDienTich();

console.log("Chu vi của hình chữ nhật là: " + chuVi);
console.log("Diện tích của hình chữ nhật là: " + dienTich);

