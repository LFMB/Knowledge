{"question": "What is event delegation?",
"answer": "Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent.  That event listener analyzes bubbled events to find a match on child elements.",
"sources": ["http://davidwalsh.name/event-delegate"]
},
{"question": "How does this work in JavaScript?",
"answer": "In typical object-oriented programming, we need a way of identifying and referring to the object that we’re currently working with. this serves the purpose, providing our objects the ability to examine themselves, and point at their own properties.</br><script type='text/javascript'></br>var deep_thought = {</br>the_answer: 42,</br>ask_question: function () { </br>return this.the_answer;</br>}</br>};</br>var the_meaning = deep_thought.ask_question();</br></script></br>This example builds an object named deep_thought, sets its the_answer property to 42, and creates an ask_question method.</br>When deep_thought.ask_question() is executed, JavaScript establishes an execution context for the function call, setting this to the object referenced by whatever came before the last '.', in this case: deep_thought. The method can then look in the mirror via this to examine its own properties, returning the value stored in this.the_answer: 42.",
"sources": ["http://web.archive.org/web/20110725013125/http://www.digital-web.com/articles/scope_in_javascript/"]
},
{"question": "Explain how prototypal inheritance works",
"answer": "In a prototypal system, objects inherit from objects. JavaScript, however, lacks an operator that performs that operation. Instead it has a new operator, such that</br>new f()</br>produces a new object that inherits from</br>f.prototype</br>function object(o) {</br>function F() {}</br>F.prototype = o;</br>return new F();</br>}</br>It takes an old object as a parameter and returns an empty new object that inherits from the old one. If we attempt to obtain a member from the new object, and it lacks that key, then the old object will supply the member. Objects inherit from objects.",
"sources": ["http://javascript.crockford.com/prototypal.html", "http://elegantcode.com/2013/03/22/basic-javascript-prototypical-inheritance-vs-functional-inheritance/"]
},
{"question": "Explain why the following doesn't work as an IIFE: function foo(){ }();",
"answer": "function expression cannot invoke itself -> generates an SyntaxError'UNexpected token ('</br>When the parser encounters the function keyword in the global scope or inside a function, it treats it as a function declaration (statement), and not as a function expression, by default. If you don’t explicitly tell the parser to expect an expression, it sees what it thinks to be a function declaration without a name and throws a SyntaxError exception because function declarations require a name.</br>Interestingly enough, if you were to specify a name for that function and put parens immediately after it, the parser would also throw a SyntaxError, but for a different reason. While parens placed after an expression indicate that the expression is a function to be invoked, parens placed after a statement are totally separate from the preceding statment, and are simply a grouping operator (used as a means to control precedence of evaluation).</br>// While this function declaration is now syntactically valid, it's still a statement, and the following set of parens is invalid because the grouping operator needs to contain an expression.</br>function foo(){ /* code */ }(); // SyntaxError: Unexpected token )</br>// Now, if you put an expression in the parens, no exception is thrown...but the function isn't executed either, because this:</br>function foo(){ /* code */ }( 1 );</br>// Is really just equivalent to this, a function declaration followed by a</br>// completely unrelated expression:</br>function foo(){ /* code */ }</br>( 1 );",
"sources": ["unknown"]
},
{"question": "What needs to be changed to properly make it an IIFE?",
"answer": "// Either of the following two patterns can be used to immediately invoke a function expression, utilizing the function's execution context to create 'privacy.'</br>(function(){ /* code */ }()); // Crockford recommends this one</br>(function(){ /* code */ })(); // But this one works just as well",
"sources": ["unknown"]
},
{"question": "What's the difference between a variable that is: null, undefined or undeclared?",
"answer": "A variable is undeclared when it does not use the var keyword. It gets created on the global object (that is, the window), thus it operates in a different space as the declared variables. </br>//undefined is a primitive type. </br> You can know if a variable is undefined with the following:</br>if (typeof(variable) !== 'undefined') {</br>console.log('variable is not undefined');</br>} else {</br> console.log('variable is undefined');</br>}</br> null is a variable that is defined to have a null value.</br>var nullVariable = null; // null</br> typeof nullVariable // 'object'",
"sources": ["unknown"]
},
{"question": "How would you go about checking for any of these states?",
"answer": "using strict mode wil throw erros when it hits an undeclared variable</br> if (typeof(variable) !== 'undefined') {</br>console.log('variable is not undefined');</br>}</br> else {</br> console.log('variable is undefined');</br>}</br>if( variable === null ) {</br>console.log('variable is null');</br>} else {</br>console.log('variable is not null');</br> }",
"sources": ["unknown"]
},
{"question": "What is a closure, and how/why would you use one?",
"answer": "Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.",
"sources": ["unknown"]
},
{"question": "What's a typical use case for anonymous functions?",
"answer": "",
"sources": []
},
{"question": "How do you organize your code? (module pattern, classical inheritance?)",
"answer": "",
"sources": []
},
{"question": "What's the difference between host objects and native objects?",
"answer": "",
"sources": []
},
{"question": "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
"answer": "",
"sources": []
},
{"question": "What's the difference between .call and .apply?",
"answer": "",
"sources": []
},
{"question": "Explain Function.prototype.bind",
"answer": "",
"sources": []
},
{"question": "When would you use document.write()?",
"answer": "Avoid it! - The use of document.write where native DOM alternatives such as document.createElement are more appropriate. document.write has been grossly misused over the years and has quite a few disadvantages including that if it's executed after the page has been loaded it can actually overwrite the page we're on, whilst document.createElement does not. </br>. It also doesn't work with XHTML which is another reason opting for more DOM-friendly methods such as document.createElement",
"sources": ["http://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternstructure"]
},
{"question": "What's the difference between feature detection, feature inference, and using the UA string?",
"answer": "",
"sources": []
},
{"question": "Explain AJAX in as much detail as possible.",
"answer": "",
"sources": []
},
{"question": "Explain how JSONP works (and how it's not really AJAX).",
"answer": "",
"sources": []
},
{"question": "Have you ever used JavaScript templating?",
"answer": "",
"sources": []
},
{"question": "If so, what libraries have you used?",
"answer": "",
"sources": []
},
{"question": "Explain 'hoisting'",
"answer": "",
"sources": []
},
{"question": "Describe event bubbling",
"answer": "",
"sources": []
},
{"question": "What's the difference between an 'attribute' and a 'property'?",
"answer": "",
"sources": []
},
{"question": "Why is extending built-in JavaScript objects not a good idea?",
"answer": "",
"sources": []
},
{"question": "Difference between document load event and document ready event?",
"answer": "",
"sources": []
},
{"question": "Difference between document load event and document ready event?",
"answer": "",
"sources": []
},
{"question": "What is the difference between == and ===?",
"answer": "",
"sources": []
},
{"question": "Explain the same-origin policy with regards to JavaScript",
"answer": "",
"sources": []
},
{"question": "Make this work: duplicate([1,2,3,4,5]); -> [1,2,3,4,5,1,2,3,4,5]",
"answer": "",
"sources": []
},
{"question": "Why is it called a Ternary expression, what does the word 'Ternary' indicate?",
"answer": "",
"sources": []
},
{"question": "What is 'use strict';? what are the advantages and disadvantages to using it?",
"answer": "",
"sources": []
},
{"question": "Create a for loop that iterates up to 100 while outputting 'fizz' at multiples of 3, 'buzz' at multiples of 5 and 'fizzbuzz' at multiples of 3 and 5",
"answer": "",
"sources": []
},
{"question": "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
"answer": "",
"sources": []
},
{"question": "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
"answer": "",
"sources": []
},
{"question": "Explain what a single page app is and how to make one SEO-friendly",
"answer": "",
"sources": []
},
{"question": "What is the extent of your experience with Promises and/or their polyfills?",
"answer": "",
"sources": []
},
{"question": "What are the pros and cons of using Promises instead of callbacks?",
"answer": "",
"sources": []
},
{"question": "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
"answer": "",
"sources": []
},
{"question": "What tools and techniques do you use debugging JavaScript code?",
"answer": "",
"sources": []
},
{"question": "What language constructions do you use for iterating over object properties and array items?",
"answer": "",
"sources": []
},
{"question": "Explain the difference between mutable and immutable objects.",
"answer": "",
"sources": []
},
{"question": "What is an example of an immutable object in JavaScript?",
"answer": "",
"sources": []
},
{"question": "What are the pros and cons of immutability?",
"answer": "",
"sources": []
},
{"question": "How can you achieve immutability in your own code?",
"answer": "",
"sources": []
},
{"question": "Explain the difference between synchronous and asynchronous functions.",
"answer": "",
"sources": []
},
{"question": "What is event loop?",
"answer": "",
"sources": []
},
{"question": "What is the difference between call stack and task queue?",
"answer": "",
"sources": []
}