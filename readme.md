# #1 Are you logged in? 

Now, we aren’t connecting to a database in anyway just yet, so, don’t worry about that just yet. That’ll be Week 8 or so :-) **You’re going to love it.**

> One of the hardest things to do is start. Let's make that easier by starting.

What I’d like to see is a welcome page to a ‘social network’ (name can be whatever you want it to be. Abrar, if that’s alright with you?) and I want it to check whether the user is signed in.

We have seen the **‘toggle’** strategy in theory and on a page that didn’t really do much but let’s remind ourselves of that now. 

```javascript

let toggle = true;

const toggleFunction = () => {
    if (toggle) {
        console.log(`I am true.`);
        toggle = false;
    }
    else {
        console.log(`I am false.`);
        toggle = true
    }
}

toggleFunction()
```

If the toggle variable is true, then it cannot be false, right? When it checks, reverse it and you end up with a basic toggle feature. Call the function a few times and it will switch between true and false. 

With the signed in feature, if the user is signed in, display a sign out button and a hello message. If they are not signed in, display two input boxes and a button to sign in. One box for the username and one for the password. Think about the display of the password input box, it needs to be secure, right? The button doesn’t send the data anywhere, it simply pretends for now. 

In the end, you should have two potential displays on one page. A signed in view with one button and a h1. Then if they aren’t signed in, two input fields and a button to sign in. 

### If you need any pointers, please ask :-) Remember, do not overcomplicate it. 