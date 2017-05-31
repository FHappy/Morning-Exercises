# Morning-Exercises for Atl WDI-10

These are a collection of random logic puzzles I found online and wrote tests for so you can see whether or not you got the answer correct.
Like everything else in coding, there are a million different ways to solve a problem and __no particularly correct answer__.
Having said that, you should strive to write **DRY** and readable code.
I've ranked these according to difficulty, none of these are particularly hard. 
If you find this fun, I can make some hard problems as well. 
~~Have fun.~~
### ** ¯\\_(ツ)_/¯ **

## Instructions:

Clone this repo into whatever folder you like (preferably outside of your atl-wdi-10 folder to avoid endless git conflicts).

### Mocha

Mocha and chai are test suites that I used so that you might check your answers (calm down, we'll get to that in a second).

#### Installation:

To install mocha, run this from anywhere in your terminal:

```bash
npm install -g mocha
```

Now that you've installed mocha, you can run tests from the command line.

In the root folder of your cloned repo run (just in case this gets more complex down the line).

```bash
npm install
```
#### Running Tests:

You'll notice that each problem (exercise?) is in it's own folder. If we're doing 'sortaSum', cd into that folder.
Each prompt and instructions will be in the js file with the name of the problem (don't go into the test folder).
The prompt will include the general instructions, a few examples, and maybe a hint, **__who knows?__**
It's important that you don't change the name of the function where you'll write your answer. It will mess with the tests if you do.
The tests themselves are pretty general but should cover all the edge/use cases I could think of.

To run a test for a particular problem, make sure you're in that problem's folder, then in terminal run:

```bash
mocha test
```

That's it.

For example, if I'm in sortaSum and I think have a working answer, my output should look something like this:

```bash
$ mocha test


  sortaSum
    #actual sum less than 10
      1) should return 7 with arguments 3 and 4
      2) should return 9 with arguments 12 and -3
      3) should return 9 with arguments -3 and 12
    #actual sum more than 19
      4) should return 21 with arguents 10 and 11
      5) should return 21 with arguments 14 and 7
      6) should return 20 with arguments 14 and 6
    #actual sum in **forbidden zone**
      7) should return 20 with arguments 9 and 4
      8) should return 20 with arguments 4 and 6


  0 passing (9ms)
  8 failing
```
