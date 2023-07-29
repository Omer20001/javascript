// OOP Constructor

var Person=function(name,surname,yearOfBirth,age){
    this.name=name;
    this.surname=surname;
    this.yearOfBirth=yearOfBirth;
    this.age=function(){
        return 2023-this.yearOfBirth
    }
}

var ali=new Person("Ali","Cavadov",1999);
var aydan=new Person("Aydan","Aliyeva",2001)
console.log(ali.age());
console.log(aydan)


///////////////////////////////////////////////////////

var University=function(uniName,numberOfStudents,newStudents,exStudent){
    this.uniName=uniName;
    this.numberOfStudents=numberOfStudents;
    this.newStudents=newStudents;
    this.exStudent=function(){
        return this.numberOfStudents-this.newStudents
    }
}

var Adnsu=new University("Adnsu",10000,2000);

console.log(Adnsu.exStudent())

