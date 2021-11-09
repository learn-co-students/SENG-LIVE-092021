# Debugging in ruby

#### What is debugging?

From Techopedia:

'Debugging is the routine process of locating and removing computer program bugs, errors or abnormalities, which is methodically handled by software programmers via debugging tools. Debugging checks, detects and corrects errors (or "bugs") to allow proper program operation, according to set specifications...Normally, software contains errors and bugs, which are routinely removed. In the debugging process, complete software programs are regularly compiled and executed to identify and rectify issues. Large software programs, which contain millions of source code lines, are divided into small components. For efficiency, each component is debugged separately at first, followed by the program as a whole. In general, the way that debugging works depends on the global testing strategies that are chosen.'

In other words...

Debugging is the science of investigating and solving code problems through accessible debugging tools. 

### Why is debugging important?

We use debugging to determine why applications and programs are not behaving as expected. 

### Best processes for debugging:
 
- Consider the goal of the code
- What is the expected behavior?
- What are all the components that make up this behavior?
- What does the error/stack trace say? 
- What can we assume about the error?
- Think about how to debug each assumption
- Debug and repeat until an assumption is true

### Testing vs debugging

Testing (rspec) and debugging are like the ying and yang of programming. They complete each other but are not the same thing. They compliment one another. Testing is used to identify what could go wrong if errors are made in the code base. Debugging is to find the error and solve it. 

### Common coding errors: 

- Syntax error
- Runtime error
- Semantic error
- Logic error
- Not following code conventions
- NoMethodError
- Using the wrong variable name in the wrong place
- Undefined variables
- undefined method 'some_method' for nil:NilClass
 
### Challenges of debugging
- Debugging will take more time than writing the code. 
- Challenges that can arise:
    - The cause of the bug is not so apparent, but the program is breaking.
    - Fix one part, break another.

### Debugging tools:
- Puts: (similar to console.log()) - prints to terminal 
    - Check variable values 
    - Check method return value 
- Pry: (similar in debugger)
    - acts as a playground to test data/methods
    - Stops in the middle of our program, where it is undefined 
    - use cases: within methods, to see what is breaking the method
- Rake Console: 
    - its a terminal for a ruby app during run 
    - Used for debugging our application as a whole
    - Testing associations, test the program after debugging, to update tables(migrations and associations)
    - Test out methods before coding them 
- Eyes 
