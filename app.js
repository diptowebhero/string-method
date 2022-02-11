// String()
//
// charAt()
// charCodeAt()
// concat()
// startsWith()
// endsWith()
// String.fromCharCode()
// includes()
// indexOf()
// lastIndexOf()
// Length
// match(regx)
// repeat()
// replace()//
// search()
// slice()
// split()
// substr()
// substring()
// toUpperCase()
// toLowerCase()
// toString()
// trim()
// trimStart()
// trimEnd()

//(1)Length
//একটা স্ট্রিং এর length return করে(var text = "bangladesh");
// var text = "bangladesh"
// console.log(text.length)//return 10

//(2)concat এর কাজ হচ্ছে একাদিক স্ট্রিংকে এক সাথে জোড়া লাগানো বা যোগ করা।।
// EX
// var name = "I am Dipto";
// var lastName ="Das";
// var age = 21;
// var fullVioData = name.concat(" " + lastName + " " + 'i am' + " " + age + " " + 'years old');
// console.log(fullVioData);

//(3)charAt এর কাজ হচ্ছে, যদি কোনো একটা স্টিং এর নির্দিস্ট অবস্থানে বা ইনডেএক্সে কোন ক্যারেক্টারটা টা আছে যানতে চাইলে charAt method টা ইউস হয়।।
// EX
// var name = "dipto";
// console.log(name.charAt(0));return d

//(4)slice method মানে হলো কোনো স্ট্রিং থেকে নির্দিস্ট অংশ কেটে নিয়ে নতুন একটা স্ট্রিং রির্টান করে।। slice method ২ টা প্যারামিটার নেয় start position  এবং  end position
// EX
// var name = 'i am dipto das';
// var name1 = 'i am dipto das';
// var d = name.slice(-9,-4); //return dipto //nagetive  মান দিলে position count  হবে স্টিং এর শেষের থেকে;
// console.log(d);
// var e = name.slice(5,14);
// console.log(e);return dipto das;

//(5) startWith method যদি i স্ট্রিং এর প্রথমে থাকে থাহলে true return করবে, যদি না থাকে থাহলে false return করবে
// var name = 'i am dipto das';
// var d = name.startsWith('i am');//return true
// console.log(d);

//(6) endsWith()method the oposit of startsWith

//(7) toUpperCase() কোনো একটা স্টিং এর সকল লেখাকে যদি capital letter চাই থাহলে toUpperCase() method ব্যাবহার হয়
// var name = "i am dipto das";
// console.log(name.toUpperCase()); //return I AM DIPTO DAS

//(8) toUpperCase() কোনো একটা স্টিং এর সকল লেখাকে যদি small letter করতে চাই থাহলে toUpperCase() method ব্যাবহার হয়
// var name = "i am DiPto das";
// console.log(name.toLowerCase()); //return i am dipto das

//(9) trim() method একটা স্ট্রিং এর উভয় সাইটের whitespace remove করে।।
// EX
// var name ="    i am dipto das    ";
// console.log(name.trim()); //remove whitespace

//(10) split() method একটা বড় স্ট্রিংকে array তে রুপান্তর করে।। এবং এক একটা ওয়ার্ড এ রুপান্তর করার জন্য split(" ") এটা ব্যবহার করা হয়।।
//var name = "i am dipto das";
// console.log(name.split());return [ 'i am dipto das' ]
//console.log(name.split(' '));//return [ 'i', 'am', 'dipto', 'das' ]

//(11) replace();
//var str = "i am dipto das";
//var d = str.replace("dipto","dip");//প্রথম প্যরামিটার হবে কোন ওয়ার্ড টাকে replace করতে চান,২য় প্যরামিটার হবে কি দিয়ে replace করতে চান, প্রথম যেটার সাথে ম্যাচ হবে সেটাকেই replace করবে।। To replace case insensitive।।
// console.log(d);

//(12)includes 
let text = "Hello world, welcome to the universe.";
//console.log(text.includes("worlds")); //return true যদি স্ট্রিং এর মধ্যে ওয়ার্ডটা খুজে না পায় থাহলে false return  করবে..
console.log(text.includes("world",12));//০ থেকে ১২ index কেটে নিয়ে তারপরের index/word  গুলুতে খুজে দেখবে...ওয়ার্ডটা আছে কিনা...।//return false


// var num = "7";
// var g = num.padStart(5,9);//return 79999
// var f = num.padEnd(5,9); //return 99997
// console.log(f);
// console.log(g);