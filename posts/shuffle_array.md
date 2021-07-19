---
title: 'I learnt to shuffle an array and an important lesson'
date: 'Aug 04, 2020'
excerpt: 'Old post'
cover_image: '/images/posts/pbd.png'
---

## I learnt to shuffle an array and an important lesson.
😏All these years I have faced the constant problem of sorting an array of int, strings, by property value. 

😳I have never thought how can I shuffle this sorted array (even unsorted array).

I came across this problem while I was building a Duolingo style Math quiz app. I had to randomize the position of the correct answer in the _array_ of options. 

🤔 I pondered over writing some pseudo code for it, I knew it has to do with randomly selecting an index between the boundaries of the array.

😴 Yet as a _lazy_ engineer I googled for it immediately, to see how people do it. I came across [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm) algorithm.

```
for i from n−1 downto 1 do
     j = random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
```

🤯 It was quite intriguing with its simplicity. I was able to shuffle my options array. 
But then I thought, 

> Would I have come up with similar algo. without google? I do not know but it would have taken some time

😇 I will not be able to solve all problems without taking help. But I should be comfortable to try and solve it, before getting answers from google. 

I had to practice on solving problems that make me uncomfortable.

🚩 I need to take on new challenges outside of my fulltime work(codewars, Leetcode, Freecodecamp, [#100daysofreact](https://twitter.com/hashtag/100DaysOfCode?))

> The experience of reinventing the wheel is different for every person

**The implementation**
```
shuffleOptions = (optionsArr) => {
        var m = optionsArr.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = optionsArr[m];
            optionsArr[m] = optionsArr[i];
            optionsArr[i] = t;
        }
        return optionsArr;
    }
```


Amazing visualization + complexity comparison [here](https://bost.ocks.org/mike/shuffle/).




*_Randomness mentioned here are pseudo randomness_*