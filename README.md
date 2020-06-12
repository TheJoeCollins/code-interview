## Leader Boards
---

### Test 1
Given an array of size(n) return an array of top(y) results.


```ts

const leaderBoard = (
    members: MemberPointEntry[],
    threshold: number
  ): Leader[] => {
     // Your Answer Returned Here
    return []
  };

type MemberPointEntry = {
    name: string,
    points: number,
}
  
  type Leader = {
    name: string,
    total: number,
}
```

If given a list of 5 members and the threshold is 2 only return the top 2 members.


To run the tests use the below command:

```
 yarn test
```

This test is complete when either all tests pass or the allotted time is up

---

### Test 2

Now take a given members list returned from `mockPromise` and display the list in order of highest to lowest score.

Allow the user to sort the list by name and by score.

**Do not worry about any CSS, simply display the data and functionality**

Entry to this test is ` ./src/test2/components/List.tsx`

You make use/make any additional components as you wish. There are no tests to run. This one will just be reviewed.

---

## Documentation

* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - Javascript Arrays
* [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) - Javascript Working With Objects
* [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - Javascript Maps 
