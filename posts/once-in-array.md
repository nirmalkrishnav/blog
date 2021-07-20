---
title: 'Finding element that appears once in an array where other elements appear twice : Leetcode'
gist: 'This is an example implementation using hashmap'
date: 'Jul 1, 2021'
---

This is an example implementation using hashmap. The input array nums is considered to have only one unique number found once, other numbers occurs > once. 

```
// ts
function singleNumber(nums: number[]): number {
    
    const hash = {};
    
    for(let i = 0; i< nums.length; i++){   
        hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1
    }

    return Object.keys(hash).filter(k=> hash[k] === 1).map(k=> parseInt(k))[0];
    
};
```