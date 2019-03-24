# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Provide an example where a url DOES not represent a resource, then describe how to modify it so that it does.

In deciding what resources are within your system, name them as nouns as opposed to verbs or actions. In other words, a RESTful URL should refer to a resource that is a thing instead of referring to an action. Nouns have properties as verbs do not, just another distinguishing factor.

Not represent a resourceExample: ` /deleteAllRedCars`
Modify:  `/cars`


## Q: I say that "Once you go async, you have to stay async".  What does this mean?  Give an example that demonstrates.

It means to use a value from async,  must stay async, you cannot get async from middle of code execution.
```
const promise = Promise.resolve("hi"); 
const value1 = promise.then(    
	(text) => console.log(`callback: ${text}`)  
); 
console.log(`from then: ${value1}`); 
```
````
from then: [object Promise] 
callback: hi 

## Q: What is a rule of thumb you can follow to understand when async code can and cannot modify your variables and/or call your methods?

That triggering is asynchronous (async) You won't know when it happens It won't happen in the middle of code execution 
Async events are handled with callbacks 

## Q: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

It means store the value for all things in  JS objects that represent the rendered page.  It means when you are not store your state in variables/object and use those to update the screen as needed.

The screen is the visual output if you alter the display, you change how to get the list that way As your display gets more complicated, so does all your state interaction


## Q: What is the primary rule to follow to prevent poor web security such as injection attacks?  (This is NOT about safely storing passwords)

Never craft your SQL from user input Always use "bound" variables when possible If not possible to use bound, use the escaping libraries from your vendor AND whitelist your data


## Q: What is a polyfill?  When should one be used?  Give an example of a polyfill that follows these rules.

Polyfills add newer functionality to older JS.
write this in JS versions prior to it being standard
Example:` forEach()` is a method on Arrays takes a callback, calls that callback with each element in turn 

## Q: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

Example:
```
Name:xinrui wang
Password: password
Email: wang.xinru@husky.neu.edu
```
Cookie is not safe, so you shouldn't store Sensitive data (CC numbers, passwords), Personal data (addresses, etc), Application state, Big data and Data hard to represent in short bits of text.


## Q: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

SPA requires JavaScript to be present and enabled. If any user disables JavaScript in his or her browser, it won’t be possible to present application and its actions in a correct way.
SPA is less secure. Due to Cross-Site Scripting (XSS), it enables attackers to inject client-side scripts into web application by other users.

MPA display the data or submit data back to server requests rendering a new page from the server in the browser.
It’s the perfect approach for users who need a visual map of where to go in the application. Solid, few level menu navigation is an essential part of traditional Multi-Page Application.


## Q: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

Progressive enhancement is a strategy for web design that emphasizes core webpage content first. This strategy then progressively adds more nuanced and technically rigorous layers of presentation and features on top of the content as the end-user's browser/internet connection allow.

An SPA that uses progressive enhancement will still work when users turn off the client-side JavaScript.

## Q: Explain how a  REST service is or is not similar to a dynamic asset.

Both REST service and dynamic asset can change the page, 
Dynamic asset change page by page loads. It sends params based on input `name` attributes and sends params as url-encoded string `(something=somevalue)`

REST loads data from url in background doesn't require `<form>` doesn't use `name` attributes. Rest can have error handling.


