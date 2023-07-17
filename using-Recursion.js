/*Note: Recursive functions must have a base case when they return 
without calling the function again (in this example, when n <= 0), otherwise 
they can never finish executing.

Tests
Test case:sum([1], 0) should equal 0.
Test case:sum([2, 3, 4], 1) should equal 2.
Test case:sum([2, 3, 4, 5], 3) should equal 9.
Test case:Your code should not rely on any kind of loops 
          (for or while or higher order functions such as forEach, map, filter, or reduce.).
Test case:You should use recursion to solve this problem.

*/

function sum(arr, n) {
    if (n <= 0){
      return 0;
    }
    else {
      return sum(arr, n - 1) + arr[n-1];
    }
  }

