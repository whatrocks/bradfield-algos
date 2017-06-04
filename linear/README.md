# Class 2: Stacks, Queues, Dequeues, and Linked Lists

## Overview

Graph
* most generic data structure
* any set of things with any relationship can be modeled as a graph

Tree
* a degenerate form of a graph (less general than graph)
* graph with a clear hierarchy
* examples:
  * the file system (not exactly because symlinks break this model)

Linked List
* a degenerate form of a tree (less general than a tree)
* only one child per node

We want to model / say something about the world.
If we can identify a hierarchy, a tree easier than a graph.
If we can identify a strict ordering, a linked list is easier than a tree.

## Linear Data Structures

### Stack

* closely related to recursion (you can use explicit stack in recursive problems instead of the call stack)

Examples
* Browser history (actually two stacks for back and forward)
* Undo and redo in text editor
* The call stack for a given process

### Queue

Examples:
* Redux
* JS event loop
* message queues
* UNIX pipes (streams)

### Dequeue

### Linked List
* as a stack (add and remove from head)
* as a queue (add to the tail, remove from the head)

## Dynamic Arrays

Resizing arrays.
Known as vector (Clojure), list (Python), array (JS)
How to best implement? Linked list or array?

### Linked List considerations
* store 16 bytes per node (8 bytes for value and 8 bytes for next pointer)
* adding a node is O(n) (unless you are storing pointer to tail)
* nodes are often not in the same cache line (which is 64 bytes), so often not on L1 or L2 ram, so have to go to main memory frequently (caches on CPU are 2 orders of magnitude faster than main RAM)
* hard/slower to access by specific index or splice


### C Array considerations
* continuous memory block that is typed and preallocated
* because dynamic arrays are not typed and can be heterogeneous, the type is pointer (to addresses on the heap)
* as a result, dynamic languages are slow because of these collections (need to look up pointers)
* adding a node is O(1) -- amortized constant time appends
* splice is O(n+k)
* bad performance for shift / unshift

## Random Discussion

* [shenzhen.io](http://www.zachtronics.com/shenzhen-io/): computer assembly game

### Standard Streams

#### STDIN
* stream data (often text) going into a program
* unless redirected, standard input is expected from the keyboard

#### STDOUT
* stream where a program writes its output data
* not all programs generate output (e.g. mv command)

#### STDERR
* another output stream used to output error msgs or diagnostics

* Interface to stream data with a terminal emulator
* We are not using a terminal - we are using a terminal emulator
* Every language has an interfact over STDOUT/IN
* GUIs rarely make use of the standard streams (closest analogy is copy and paste from one program to another)

automated church bells --> loom --> punchcards --> census tabulation machines (wanted to do db-style aggregations) --> teletype