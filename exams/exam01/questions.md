# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?

Static assets are nonsense long strings to a server. These files are just handed straight over to the browser without interpreted by the server. So when you change a static asset, you don't need to restart the server to see the change. 

In contrast, when you change a dynamic asset, you need to restart the server to see the change. For example, when you call an index.html, but there is no such file in any of the folders in the application, and yet you can still use it. This is because the server will assemble and render the HTML from templates and data. 

## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root" and how does this relate to it?

The absolute file path is begin from the root.  Given the absolute address, you can always get to the place, no matter from where you started.

The relative file path is begin from the current location. Given the relative address, you should use it only when you positively know where you are at the moment. It can only find pages in same domain.

The root of web is relative to the web server, ususlly begin after the first slash.


## Q: What is the difference between server-side and client-side JS?

Client-side JS runs in a client machine like a browser. The client-side JavaScript is embedded directly by in the HTML pages. 

Server-side JS runs in a server. The server-side java scripts are deployed only after compilation. Server-Side JavaScript enables back-end access to databases, file systems, and servers.


## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?


*Differences:

1. Var can change values and a var can be reassigned.  Const is read-only, cannot be redeclared or reassigned, but it is mutable when the const is an object or array.
    Let can be reassigned, but cannot be redeclared.

2. Var is a functional scope. Const or let are block-scoped
    
When to use:
In almost all cases, opt for const first. Use let when you know that a variable will have a dynamic value. Not use var unless targeting older JS engines.


## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)

1. Using prototype chain to inheritance, like  _proto_   or .prototype to get the prototype of the object you want to inheritance.
2. Child object use .call to get what inside the parent object. This method can inheritance multi-parents.
3. child object inheritance parents as an instance by creating a new parent object.
4. Using for loop to get parent methods and add them to a child object.

## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".
```
function purr(){
    this.makeSound = function(){
		console.log( 'purr');
	}
}

function Cats(){
	this.name =  'cat';
}
Cats.prototype = new purr();

const cat = new Cats();
cat.makesound(); // purr

```
## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".

```
function hiss(){
    this.makeNoise = function(){
		console.log('hiss');
	}
}

function Cars(){
	const instance = new hiss();
	return instance;
}

const car = new Cars();
car.makeNoise(); //hiss
```


## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.
```
<div class="wordlist" >
    <ul>
		<li> dog</li>
		<li> cat</li>
		<li> ice</li>
	</ul>
</div>
```
I can change the color of all the wordlist descendants. Like this:
```
.wordlist{
	color: blue;
}
```
But I can't ask CSS to change the color  whoever contains unordered list.




## Q: Explain what a callback is, and give an example.

A callback is a function executed after another function finished.
```
const otherPeople ={
    name: 'Ann',
} ;

 function greeting( name ){
    console.log('Hello ' + name);
}

function people( otherPeople, greeting ){
	const name = otherPeople.name;
	greeting(name);
} 

people(otherPeople, greeting);
```



## Q: In CSS, what does it mean "You shouldn't name your classes after what they will appear like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

You can name as what they identify, what they are, not what they trying to do. Because poorly named items are hard to find and hard to maintains in the future.

Poorly named like `<div class = "left">`, `<div class = "right">`,`<div class = "bold">`,`<div class = "red">`



