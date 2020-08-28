/*
Everything is same as it is in Java.
Just if we want to create constructor we need to use constructor keyword.
//Even Inheritance is also same using extends keyword
 */
class Person {

    constructor(name) {
        this.name = name
    }
    getGreeting() {
        // return 'Hello this is '+ this.name + '!'
        return `This is ${this.name}`
    }

}

class Student extends Person{

    constructor(name,age,major) {
        super(name);
        this.age = age;
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    //Method Overriding
    getGreeting() {
        return super.getGreeting();
    }
}

const me = new Person('Prakshal Jain');
console.log(me)

console.log(me.getGreeting())

const other = new Student('Mike', 26, 'Computer Science')


console.log(other)
console.log(other.getGreeting())