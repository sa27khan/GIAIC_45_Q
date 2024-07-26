1
> Sudo apt  install nodejs
> sudo npm install -global typescript
> download and install vs code
> in vs code , go to extension tab and search typescript then install 
  
2
// In typescript 
let uname: string = 'Sadia Asif Khan'
console.log(` Hello ${uname}, would you like to learn some Python today?`)
# In Python
name = 'Sadia Asif Khan'
print(f'Hello {name},  would you like to learn some Python today?')

3
// In Typescript
let nam: string = 'Sadia Asif Khan'
console.log(nam.toLowerCase())
console.log(nam.toUpperCase())
# In Python
name = 'Sadia Asif Khan'
print(name.lower())
print(name.upper())
print(name.title())

4
// In Typescript
let author: string = 'Albert Einstein'
console.log(`${author} once said, A person who never made a mistake never tried anything new.`)
# In Python
author = 'Albert Einstein'
print(f'{author} once said, A person who never made a mistake never tried anything new.')

5
// In Typescript
let famous_person: string = 'Albert Einstein'
let message:string = ' A person who never made a mistake never tried anything new.'
console.log(`${famous_person} once said,${message}`)
# In Python
author = 'Albert Einstein'
message = ' A person who never made a mistake never tried anything new.'
print(f'{author} once said,{message}')

6
// In TypeScript
console.log('\t  Sadia Asif Khan \n')
# In Python
print('\t  Sadia Asif Khan \n')

7
// In typescript
console.log(4+4,10-2,4*2,16/2)
# In Python
print(4+4,10-2,4*2,16/2)

8
// In Typescript
console.log(4+4)
console.log(10-2)
console.log(4*2)
console.log(16/2)
# In Python
print(4+4)
print(10-2)
print(4*2)
print(16//2)

9
// In Typescript
const fnum: number = 14
console.log(`${fnum} is a my favourite number`)
# In Python
fnum = 14
print(f'{fnum} is a my favourite number')

10
// In Typescript
// creating number variable
const fnum: number = 14
// printing favourite number with message
console.log(`${fnum} is a my favroute number`)
# In Python
# creating variable
fnum = 14
# printing favourite number with message
print(f'{fnum} is a my favourite number')

11
// In Typescript
let names: string[] = ['Sadia',"Asif"]
console.log(names[0])
console.log(names[1])
# In Python
names = ['Sadia','Asif']
print(names[0])
print(names[1])

12
// In Typescript
let names: string[] = ['Sadia',"Asif"]
console.log('hello',names[0])
console.log('hello',names[1])

# In python
names = ['Sadia','Asif']
print('hello',names[0])
print('hello',names[1])

13
// In Typescript
let transports: string[] = ['car','motorcycle','bicycle']
console.log(`I would like to own a Honda ${transports[1]}.`)
# In Python
transports  = ['car','motorcycle','bicycle']
print(f'I would like to own a Honda {transports[1]}.')

14
// In typescript
let Guests: string[] = ['Sadia','Asif','Khan']
console.log(`i am inviting you ${Guests[0]}.`)
console.log(`i am inviting you ${Guests[1]}.`)
console.log(`i am inviting you ${Guests[2]}.`)
# In Python
Guests  = ['Sadia','Asif','Khan']
print(f'I am inviting you {Guests[0]}.')
print(f'I am inviting you {Guests[1]}.')
print(f'I am inviting you {Guests[2]}.')

15
// In Typescript
// In Typescript
let Guests: string[] = ['Sadia','Asif','Khan']
console.log(`i am inviting you ${Guests[0]}.`)
console.log(`i am inviting you ${Guests[1]}.`)
console.log(`ok ${Guests[2]} i am inviting another person.`)
console.log(Guests[2], 'cant make')
Guests[2] = 'Faisal'
console.log(`i am inviting you ${Guests[2]}.`)


console.log(` thanks for coming ${Guests[0]}.`)
console.log(`thanks for coming ${Guests[1]}.`)
console.log(`thanks for coming ${Guests[2]}.`)
# In Python
Guests  = ['Sadia','Asif','Khan']
print(f'I am inviting you {Guests[0]}.')
print(f'I am inviting you {Guests[1]}.')
print(f'ok {Guests[2]} i am inviting another person.')
print(Guests[2],'cant make')
Guests[2] = 'Faisal'
print(f'i am inviting you {Guests[2]}.')


print(f'thanks for coming {Guests[0]}.')
print(f'thanks for coming {Guests[1]}.')
print(f'thanks for coming {Guests[2]}.')

16
// In Typescript
// In Typescript
let Guests: string[] = ['Sadia','Asif','Khan']
console.log(`i am inviting you ${Guests[0]}.`)
console.log(`i am inviting you ${Guests[1]}.`)
console.log(`ok ${Guests[2]} i am inviting another person.`)
console.log(Guests[2], 'cant make')
Guests[2] = 'Faisal'
console.log(`i am inviting you ${Guests[2]}.`)

// console.log(` thanks for coming ${Guests[1]}.`)
// console.log(`thanks for coming ${Guests[2]}.`)
// console.log(`thanks for coming ${Guests[3]}.`)

Guests.unshift('nazim')
Guests.push('zamin')
console.log(Guests)

console.log(` thanks for coming ${Guests[0]}.`)
console.log(` thanks for coming ${Guests[1]}.`)
console.log(` thanks for coming ${Guests[2]}.`)
console.log(` thanks for coming ${Guests[3]}.`)
console.log(` thanks for coming ${Guests[4]}.`)

17
// typescript
// In Typescript
let Guests: string[] = ['Sadia','Asif','Khan']
console.log(`i am inviting you ${Guests[0]}.`)
console.log(`i am inviting you ${Guests[1]}.`)
console.log(`ok ${Guests[2]} i am inviting another person.`)
console.log(Guests[2], 'cant make')
Guests[2] = 'Faisal'
console.log(`i am inviting you ${Guests[2]}.`)


// console.log(` thanks for coming ${Guests[1]}.`)
// console.log(`thanks for coming ${Guests[2]}.`)
// console.log(`thanks for coming ${Guests[3]}.`)


Guests.unshift('nazim')
Guests.push('zamin')
console.log(Guests)


// console.log(` thanks for coming ${Guests[0]}.`)
// console.log(` thanks for coming ${Guests[1]}.`)
// console.log(` thanks for coming ${Guests[2]}.`)
// console.log(` thanks for coming ${Guests[3]}.`)
// console.log(` thanks for coming ${Guests[4]}.`)


console.log(` sorry, you cant come, we face some issue ${Guests[2]}.`)
console.log(` sorry, you cant come, we face some issue ${Guests[3]}.`)
console.log(` sorry, you cant come, we face some issue ${Guests[4]}.`)


Guests.pop()
Guests.pop()
Guests.pop()


console.log(` congratulations for invitation ${Guests[0]}.`)
console.log(` congratulations for invitation ${Guests[1]}.`)


Guests.pop()
Guests.pop()


console.log(Guests)
18
// In Typescript
let places: string[] = ['Pakistan','India','Iran','Turkey','Maldives']
console.log(places) // original array
let s = places.sort() // alphabetical array
console.log(s)
console.log(s.reverse())
let r = places.reverse() // reverse array
console.log(r)
console.log(r.sort())


19
// In Typescript
// follow the past Guests exercise
console.log('three peoples added')
console.log(Guests[2]) // update with Faisal
console.log(Guests[0]) // add nazim in starting
console.log(Guests[4]) // append zamin


20
// In Typescript
 let things: string[][] = [['mountain1','mountain2'],['country1','country2'],['city1','city2']]
console.log(things[0])
console.log(things[1])
console.log(things[2])
# In Python
things = [['mountain1','mountain2'],['country1','country2'],['city1','city2']]
print(things[0])
print(things[1])
print(things[2])

21


21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


Not understanding 21 exercise


22
// In Typescript
// In Typescript
 let things: string[][] = [['mountain1','mountain2'],['country1','country2'],['city1','city2']]
console.log(things[5]) // index error
# In Python
things = [['mountain1','mountain2'],['country1','country2'],['city1','city2']]
print(things[5])  // index error




23
// In Typescript
let car = 'subaru';
if (car=='subaru'){
   console.log(true)
}
else{
   console.log(false)
}


// In Python
car = 'subaru'
if car == 'subaru':


 print(True)
else:


 print(False)


24
// In Typescript
let nam: string = 'Sadia Asif'.toLowerCase()
if (nam=='sadia aaif'){
   console.log(`welcome ${nam}`)
}
else{
   console.log('try again')
}


const age: number = 18
if (age==18 || age>18){
   console.log('eligible for vote')
}
if (age<18 && age<0){
   console.log('not eligible for vote')
}
let a:number[] = [1,2,3,4,5]
console.log(Array.isArray(a))


25
// In Typescript
let alien_color:string = 'green'
if (alien_color=='green'){
   console.log('player earned 5 points')
}
else{
   console.log('failed')
}
# In Python
alien_color = 'green'
if (alien_color=='green'):
 print('player earned 5 points')
else:
 print('failed')


26
// In Typescript
let alien_color = prompt('Enter color: ')
if (alien_color=='green'){
   console.log('player earned 5 points')
}
else{
   console.log('player earned 10 points')
}


27
// In Typescript
let alien_color = prompt('Enter color: ')
if (alien_color=='green'){
   console.log('player earned 5 points')
}
if (alien_color=='yellow'){
   console.log('player earned 10 points')
}
if (alien_color=='red'){
   console.log('player earned 15 points')
}
else{
   console.log('please enter color again')
}


28
// In Typescript
let age: number = 7
if (age<=2){
   console.log('person is baby')
}
if (age>2 && age<4){
   console.log('person is toddler')
}
if (age>4 && age<13){
   console.log('person is kid')
}
if (age>13 && age<20){
   console.log('person is teenager')
}
if (age>=20 && age<65){
   console.log('person is kid')
}

29
// In typescript
let favorite_fruits: string[] = ['Apple','Banana','Orange','Guava','Mango']
if (favorite_fruits.includes('Mango')){
   console.log('you realy like Mango')
}
if (favorite_fruits.includes('Guava')){
   console.log(' not like Guava')
}
if (favorite_fruits.includes('Apple')){
   console.log('you realy like Apple')
}


30
// In Typescript
const usernames: string[] = ["admin", "sadia", "asif", "khan", "faisal"]


usernames.forEach(username => {
   if (username === "admin") {
       console.log("Hello admin, would you like to see a status report?")
   } else {
       console.log(`Hello ${username}, thank you for logging in again.`)
   }
})


31
// In Typescript
let usernames: string[] = ["sadia", "asif", "khan", "faisal", "abbas"]


if (usernames.length === 0) {
   console.log("We need to find some users!")
} else {
   usernames.forEach(username => {
       if (username === "admin") {
           console.log("Hello admin, would you like to see a status report?")
       } else {
           console.log(`Hello ${username}, thank you for logging in again.`)
       }
   })
}


usernames = []
if (usernames.length === 0) {
   console.log("We need to find some users!")
}


32
// In Typescript
Skip


33
// In Typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]


numbers.forEach(number => {
   let numEnding: string
   if (number === 1) {
       numEnding = "st"
   } else if (number === 2) {
       numEnding = "nd"
   } else if (number === 3) {
       numEnding = "rd"
   } else {
       numEnding = "th"
   }
  
   console.log(`${number}${numEnding}`)
})


34
// In Typescript
const pizzas: string[] = ["Pizza1", "Pizza2", "Pizza3"]


console.log("My favorite pizzas:")
for (let i = 0; i < pizzas.length; i++) {
   console.log(pizzas[i])
}


console.log("\nMy thoughts on each pizza:")
for (let i = 0; i < pizzas.length; i++) {
   console.log(`I like ${pizzas[i]}`)
}


console.log("\nI really love pizza!")


35
// In typescript
const animals: string[] = ["Dog", "Cat", "Rabbit"]


console.log("List of animals:")
for (let i = 0; i < animals.length; i++) {
   console.log(animals[i])
}


console.log("\nCharacteristics of each animal:")
for (let i = 0; i < animals.length; i++) {
   console.log(`A ${animals[i].toLowerCase()} would make a great pet.`)
}


console.log("\nAny of these animals would make a great pet!")


36
// In Typescript
function make_shirt(size: string, message: string): void {
   console.log(`${size} "${message}"`)
}


make_shirt("large", "I love TypeScript!")
# In Python
def make_shirt(size, message):
 print(size , message)
make_shirt('large,','I love Typescript')
# in python we create function with def keyword




37
// In Typescript
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
   console.log(`${size} "${message}"`)
}


make_shirt()


make_shirt("medium")


make_shirt("small", "JavaScript is awesome!")






38
// In Typescript
function describe_city(city: string, country: string): void {
   console.log(`${city} is in ${country}.`)
}


describe_city("Karachi", "Pakistan")
describe_city("Paris", "France")


40
// In Typescript
Skip


41
// In Typescript
const magicians: string[] = ["magi1", "maji2", "maji3", "maji4"]


function show_magicians(magicianNames: string[]): void {
   magicianNames.forEach(name => {
       console.log(name)
   })
}


show_magicians(magicians)


42
// In Typescript
Skip




43
// In Typescript
Skip


44
// In Typescript
Skip


45
// In Typescript
function carInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
   const car: { [key: string]: any } = {
       manufacturer: manufacturer,
       modelName: modelName
   }


   extras.forEach(extra => {
       const key = Object.keys(extra)[0]
       const value = extra[key]
       car[key] = value
   })


   return car
}


const car = carInfo("Toyota", "Camry", {color: "blue"})


console.log(car)


# In Python

def car_info(manufacturer, model_name, **extras):
   car = {
       'manufacturer': manufacturer,
       'model_name': model_name
   }


   for key, value in extras.items():
       car[key] = value


   return car


car = car_info("Toyota", "Camry", color="blue")


print(car)


#I also cover main topics of python, but not repeat (with assignment)

@THANKS
