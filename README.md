# Fast-Stack-Queue
A fast Stack and Queue

Most queues I found after some googling made extensive use of shift() and push(), which are unnecessarily slow methods to use for basically all interactions with the queue, so I decided to make my own, and gave it stack functionality on top (beacuse why not).

# Performance
As long as you do not need to increase the maximum size, all operations are O(1).
If you go past maximum size, the FastStackQueue will use splice() to increase its size, which is O(n).

You can optionally decrese the maximum size to a minimum with clean(), which uses up to two splice() operations in the background, but is still O(n).  
It removes unused fields from the array.

# Methods

Enqueue(element) - add element to end of queue/stack   
Dequeque() - remove first element from front of queue/stack and return it  
Peek() - return first element from front of queue/stack without removing it  

Push(element) - add element to top of stack/queue  
Pop() - remove first element from top of stack/queue and return it  
Top() - return first element from top of stack/queue without removing it  

Clean() - trunctuate front and back of internal array, this would be used if you think the internal array got oversized at some point (it only grows as much as it needs to, but it does not shrink back on its own).  
It will also remove any unsued elements if you set RemoveImmediately = false for some reason.

# Last words
Feedback is welcome.

# License
MIT
