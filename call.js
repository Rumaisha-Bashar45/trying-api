const normalPerson={
    firstName:"rumaisha",
    lastName:"bashar",
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    salary:65000,food:8000,gas:500,
    chargeBill:function(amount){
        this.salary=this.salary-amount+650;
    },
     othersBill:function(amount,house){
         this.others=this.salary-(amount+this.food+house+this.gas)
     }

}
// normalPerson.othersBill(5000,10000)
// console.log(normalPerson.others);


const heroPerson={
    first:"hero",
    last:"golam",
    salary:150106,
}
const goodPerson={
    first:"hero",
    last:"kalam",
    salary:150106,
}
const friendlyPerson={
    first:"hero",
    last:"salam",
    salary:66660,
}

const heroChargeBill=normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2500);
console.log(heroPerson.salary);
console.log(heroPerson);


const friendlyChargeBill=normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(6660);
friendlyChargeBill(6000);
console.log(friendlyPerson.salary);
console.log(friendlyPerson);
// const friendlyOthersBill=normalPerson.othersBill.bind(friendlyPerson);
// friendlyOthersBill(5555,3600);
// console.log(friendlyPerson.others);