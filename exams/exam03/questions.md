# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)

 “Don’t Repeat Yourself.” If you are doing the same thing in multiple places, consolidate the duplicate code. you’ll want to factor out smaller components/functions where possible. 

YAGNI - don’t add complexity initially, try to avoid it entirely.

## Q: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

If the user close the JavaScript on client side, nothing will work.

## Q: Using class-based components and function-based components is largely a matter of preference.  However, (excluding the recent "hooks" addition to React), there are 2 things class-based components give you that function-based components do not.  What are those 2 things? 

Class-based components can have state and lifecycle methods

## Q: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain (such as jsonstore.io).  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  

The development server will recognize that it's not a static asset, and will proxy your request to 
`http://localost:4000/service` as a fallback. The development server will only attempt to send requests without `text/html` in its `Accept` header to the proxy.
React makes an API request to `localhost:3000`, the Webpack development server. And then the development server simply proxies that request to the API server, negating any CORS issues.

The development server will recognize that it's not a static asset, and will proxy your request to 
`http://localost:4000/service` as a fallback. The development server will only attempt to send requests without `text/html` in its `Accept` header to the proxy.
React makes an API request to `localhost:3000`, the Webpack development server. And then the development server simply proxies that request to the API server, negating any CORS issues.


## Q: Follow-up: Using the above scenario, explain what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

After I run `npm run build` it will generate static assets. Assume I put those static assets into `/server/public` folder and integrated them into server. We need to make sure we’re telling Express to use it.
If you call to` /service` the server will come to the same server, and server will “listens” for requests and looks for the file `public/service` and does not find it. The server needs to be configured to respond to request to  `/service` by matching the specified route(s) and method(s), and when it detects a match, it calls the specified callback function. 


## Q: Additional follow-up: Using the above scenario, explain what changes you would make to your JSX if you were putting your JSX and server on a host on a site such as `http://favorite-cats-with-hats.com` (Not a real site)

By default, Create React App produces a build assuming your app is hosted at the server root. To override this, specify the `homepage` in your `package.json`, for example:  ``"homepage": "http://favorite-cats-with-hats.com",``
This will let Create React App correctly infer the root path to use in the generated HTML file.

## Q: I have said that you can only pass data "down" in React, not "up".  What does that mean?

Props and state can only pass down(inward/to descendants), if I have a state I can pass it down, if my child component have a state it can't give it to me.

## Q: Follow-up: If you can't pass data "up", how can anything that is "down" change data?

Descendants can communicate "up" only via callbacks, which the ancestor must pass "down".

## Q: A component should not set its own state (if it has one) based on props it was passed in.  Why?  What is the problem with setting state based on props?

setState() is asynchronized.
The problem was when the parent component re-renders on state change, the child component is not rendered with updated state value. 

## Q: Why should you have only a few components that have state?  What is wrong with having many components that have state? 

If too many components get connected to the store, components may get updated at different (and incorrect) times. It can be harder to maintain
