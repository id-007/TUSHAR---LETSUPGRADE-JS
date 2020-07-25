console.log(`Question 2`);

 class User {
     constructor(name,age,email) {
         this.name = name;
         this.age = age;
         this.email = email;
         this.gcoins = 0;
         this.courses = []; 
     }

    
 login (){
    console.log(`user ${this.name} has logged in`);
    return this;
        }

 logut(){
    console.log(`user ${this.name} has logged out`);
    return this;
         }
 
 }

 class Moderator extends User {
        constructor(name,age,email,gcoins){
            super (name,age,email);
            this.gcoins = 0;
        }
 
addCoins(){
        this.gcoins++;
        console.log(`user ${this.name} has ${this.gcoins} gcoins`)
        return this;
 }

deleteCoins(){
        this.gcoins--;
        console.log(`user ${this.name} has ${this.gcoins} gcoins`)
        return this;
        }
}



class Admin extends Moderator {

  addCourse(user,course){
    user.courses.push(course);
    // console.log(user);
  }  

  deleteCourse(user,course){
      user.courses.pop(course);
      
  }

}


let user1 = new User('Roger',23,'Royalrog@gmail.com');
  let user2 = new User('Vadantitta',25,'Vaidu@yahoo.com');
 let mod = new Moderator('Rishi',25,'Rishirich@rediffmail.com');
let admin = new Admin('Boss',35,'Boss-community@outlook.com');

 let users = [user1,user2,mod,admin];
 users.forEach(el => {
     console.table(el);
 })

 admin.addCourse(user1,'Django');
 admin.addCourse(user1,'Hadoop');
 admin.addCourse(user2,'React Js');

 admin.deleteCourse(user1,'Django');

//  user1.login();
//  mod.addCoins();
//  mod.addCoins();
//  mod.addCoins();
//  mod.deleteCoins();
//  user1.logut();



