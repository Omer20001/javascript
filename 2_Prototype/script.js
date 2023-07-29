
var Person=function(name,surname,yearOfBirth,age){
    this.name=name;
    this.surname=surname;
    this.yearOfBirth=yearOfBirth;
    
}


Person.prototype.age=function(){
    return 2023-this.yearOfBirth
}

var ali=new Person("Ali","Cavadov",1999);

console.log(ali.age())
