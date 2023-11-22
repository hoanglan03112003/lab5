class congtrunhanchia {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    tinhcong(){
        return (this.a + this.b);
    }
    tinhtru(){
        return (this.a - this.b);
    }
    tinhnhan(){
        return (this.a * this.b);
    }
    tinhchia(){
        if( this.b === 0){
            return "khong the chia nhe!"
        }
        return (this.a / this.b)
    }
    nhapgiatri(){
        this.a = parseFloat(prompt("nhap gia tri a:"));
        this.b = parseFloat(prompt("nhap gia tri b:"));
    }
}
const tongtrunhanchia = new congtrunhanchia();
tongtrunhanchia.nhapgiatri();
console.log(`cong:${tongtrunhanchia.tinhcong()}`)
console.log(`tru:${tongtrunhanchia.tinhtru()}`)
console.log(`nhan:${tongtrunhanchia.tinhnhan()}`)
console.log(`chia:${tongtrunhanchia.tinhchia()}`)
