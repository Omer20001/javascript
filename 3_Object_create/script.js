let Person={
    calculateAge:function(){
        return 2023-this.yearOfBirth
    }
}


let Anar=Object.create(Person);

Anar.yearOfBirth=1989;
console.log(Anar.calculateAge())

//////////////////////////////////////////////
let Fullname={
    fullName:function(){
        return this.name+" "+this.lastname
    }
}

let Omer=Object.create(Fullname)

Omer.name="Omer "
Omer.lastname="Qurbanov"

console.log(Omer.fullName())


/////////////////////////////////////////////