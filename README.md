# A24GroupChallenge

## Answers

### Javascript

1. What is your favourite new javascript feature and why?

`for await ... of`

2. Explain an interesting way in which you have used this javascript feature.

If one has a bunch of async requests that hits multiple endpoints to fetch data for the frontend, I needed the use the `Promise.all()`

3. Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)

Yes, with the regular function syntax, one can name the function which will appear in the call stack, but an arrow function is always an anonymous function, but great to use as an callback in the code

4. What is the difference between `myFunctionCall(++foo)` and `myFunctionCall(foo++)`

With the `++` in front the value of `foo` will be incremented before the value is accessed, while the other will increment after.

5. In your own words, explain what a javascript `class` is and how it differs from a function.

Well, technically, as `class` is an function with prototypes set, but a `class` can have variables and methods that can be evoked via the dot notation, ie: `const var1 = MyClass.var1`, `const myFunctResult = MyClass.myFunct()`. More importantly, a class has a constructor that can be executed with using the `new` key word.

### CSS
1. In your own words, explain css specificity.

In css one setup a rule that will apply styles to all `p` tags, example `p { color: #fff; }`, but with specificity, one can target certain `p` tags by specifying where in the DOM the `p` tag sits. Example: `section > p { color: #FFF }` this will apply to style to all the `p` tags that is a direct child of a section tag.

2. In your own words, explain, what is `!important` in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?

There is an hierarchy of which styles are applied to the element, styles defined in a style sheet that is linked in the `<head>` will be overridden by styles defined in the `<style>` tag in the `<head>`, for the styles that should not be overridden, one can use the `!important` to force the style to be applied.

3. What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?

I prefer flex and grid, as flex will allow the layouts respond to the screen size, while grid is a better table structure. 

4. Are negative margins legal and what do they do (margin: -20px)?

Yes, it will pull the element in that direction.

5. If a `<div/>` has no margin or other styling and a `<p/>` tag inside of it has a margin top of some kind, the margin from the `<p/>` tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?

`<div>` does not have a height and the height will adjust based on its content, but will not factor in the margins. One can add top padding to the `<div>` to push the `<p>` down the required amount.

### Unit Tests

1. What technologies do you use to unit test your react components?

Jest

2. Are there any pitfalls associated with this technology that have caused you difficulty in the past?

One losses the type saftey in typescript with jest's mocks 

4. How do you test in your unit tests to see if the correct properties are being passed to child components.

Via snapshot testing by verifying the elements in the DOM has rendered with the correct values.

### React

Change directory to react-test and startup the project by running `yarn start` after installing the dependencies with `yarn install`.

Using `npm` will also work, just delete [yarn.lock](./react-test/yarn.lock) before running `npm i`

**Note:** I was not able to figure out how that global script `let divHeight;` was going to be used in the HOC as that is not in scope and the 