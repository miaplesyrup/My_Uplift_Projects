/*# Equalize Stacks

## Learning Objectives

- Apply a stack data structure to solve problems

## Instruction

Imagine you are working on a warehouse and your task is to stack boxes and make sure they are of the optimal same height.

You are given three stacks of boxes with equal width, but different heights. You can change the height of a stack by removing and discarding its topmost box any number of times.

Write a function `equalizeStacks` to find the maximum possible height of the stacks such that all of the stacks are the same height.

Example

h1 = [1,1,1,2,3]

h2 = [2,3,4]

h3 = [1,4,1,1]

![stack init](./assets/stacks-init.png)

There are 5,3,and 4 boxes in the three stacks, with their heights in the three arrays. Remove the top 1 box from h1 and the top 1 box from from h2 and the top 2 boxes from h3 so that the three stacks all are 5 units tall. Return 5 as the answer.

![stack fin](./assets/stacks-fin.png)

## Test Cases

```js
equalizeStacks([1, 1, 1, 2, 3], [2, 3, 4], [1, 4, 1, 1]); // should return 5
equalizeStacks([1, 1], [1], [1, 2, 1, 1]); // should return 1
equalizeStacks([1, 1, 4], [2, 3], [1]); // should return 0
```

## Grading Rubric

### 75 points

Code is readable, DRY and passes the given test cases using stack implementation.

### 25 points

Use of Uplift Code Camp's code and committing standards.

## Submitting

Submission name = `hw-equalize-stacks`

1. In your Homework repository, checkout the `main` branch and do a pull to make sure that it is updated from your remote.
1. Create a new branch, use the Submission name as the branch name.
1. Create a new folder, use the Submission name as the folder name.
1. Add, commit and push your changes. Make sure to add only the relevant files to the homework.
1. Do a merge request, use the Submission name as the Merge Request Title and do not forget to write a proper description. */








function equalizeStacks(h1, h2, h3) {
    class Stack {
      constructor() {
        this.items = [];
      }
  
      push(item) {
        this.items.push(item);
      }
  
      pop() {
        return this.items.pop();
      }
    }
  
    let s1 = new Stack();
    let s2 = new Stack();
    let s3 = new Stack();
  
    for (let i = h1.length - 2; i >= 0; i--) {
      s1.push(h1[i]);
    }
  
    for (let i = h2.length - 1; i >= 0; i--) {
      s2.push(h2[i]);
    }
  
    for (let i = h3.length - 1; i >= 0; i--) {
      s3.push(h3[i]);
    }
  
    let sum1 = s1.items.reduce((a, b) => a + b, 0);
    let sum2 = s2.items.reduce((a, b) => a + b, 0);
    let sum3 = s3.items.reduce((a, b) => a + b, 0);
  
    while (s1.items.length && s2.items.length && s3.items.length) {
      if (sum1 === sum2 && sum2 === sum3) {
        return sum1;
      }
  
      if (sum1 >= sum2 && sum1 >= sum3) {
        sum1 -= s1.pop();
      } else if (sum2 >= sum1 && sum2 >= sum3) {
        sum2 -= s2.pop();
      } else if (sum3 >= sum1 && sum3 >= sum2) {
        sum3 -= s3.pop();
      }
    }
  
    return 0;
  }
  