const user = {
    name: 'Chai',
    email: 'chai@gmail.com'
}

const Teacher1 = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher1.__proto__ = user     // Prototypal Inheritance


//  Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher1)


let anotherUserName = "ChaiAurCode          "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Shahzain".trueLength()
"tea".trueLength()

