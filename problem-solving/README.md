# Class 1: Problem Solving

* "Deliberate practice"

## Polya's "How to Solve It" Method

1. Understand the problem
  * Get to the heart of it
  * ask questions: who are our users? what are the facts?
  * What is the essence of the problem?
2. Devise a plan
  * in English / pseudocode
3. Implement the plan
  * takes 90% of the time but it's the least important step
4. Look back (refactor / check work)
  * Often neglected
  * might cause looping back to previous steps with new insights

## Stairs question

* good phone screen question
* given staircase of n steps, how many different ways can you ascend by taking 1 or 2 steps?

### Fibonacci
* drawing the call stack can help
* lots of duplication
* using # of recursive FN calls is a good unit for complexity in recursive problems
* our fibo tree grows exponentially at rate of 2^n (branching factor of 2)
* not all recursive problems are exponential!
* time O(n^2)
* space O(n) --> there are n levels to our tree
* draw the call stack. Notice "overlapping subproblems" in this "tree recursive problem"
* dynamic programming takes a bottom up / iterative approach

### Multiples of 2
* 2^10 = 1024 = ~1000
* how many IP addresses are there with IPv4?
  * 4 bytes per address (8 bits in a byte), so 32 bits
  * therefore, 2^32 IP addresses
  * we know that 2^10 = 1000, so (2^10)^3 * 2^2 = 1billion * 4 = 4 billion IP addresses
* CSS colors
  * #ff0000 and rgb(255,0,0) are the same color: red.
  * CSS colors have 24 bits (3 bytes, 8 bits each)
* a byte is the smallest unit of addressable memory

### The Stack and the Heap

* Stack and heap are parts of RAM
* Stack
  * written in a stack-like semantic
  * good for simple alloc/dealloc
  * "frames" for function context/calls
* Heap (rest of RAM)
  * needs to be managed directly (deallocs)
  * need this when you want something to last beyond one function call context

#### Architecture
* CPU
  * cores
  * SRAM caches (L1, L2, L3)
  * 1 nanosecond to use the core to do math ops
  * 10 nanoseconds to read from L3
* RAM
  * DRAM
  * "main memory"
  * takes 100-200 nanoseconds to read from RAM
* SSD
  * 250 microseconds to read from SSD (even more for spinning disk)

### Complexity

* important to find the "units" of time and space
* find the relationship between these units and the inputs (see how it grows)
* how can I improve my solution?

Factorial
* recursive
  * time: O(n) .. stack frames
  * space: O(n) .. stack frames
* iterative
  * time: O(n) .. number of input
  * space: O(1) .. stack frames / placeholder variables
