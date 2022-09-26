# Get back with Redux :dolphin:

Just like Flux, it makes state changes in apps more predictable. 
:scream_cat: If you want to change state, you have to fire off an action. There's no way to change the state directly because the thing holding the state (the store) only has a getter, not setters.:scream_cat:
These basics of Flux and Redux are pretty similar.

<img src="/images/overview.gif" />

... but, why change Flux?

#### Problem 1: The code for stores can't be reloaded without wiping out the state

In Flux, the store contains two things:

- The state change logic
- The current state itself

Having these two on the same object is a problem for hot reloading. When you reload the store object to see the effect that the new state change logic has, you lose the state that the store is holding on to. Plus, you mess up the event subscriptions that tie the store to the rest of the system.

<img src="https://cdn-images-1.medium.com/max/800/1*L66K9uCQjjHmpAwT-a9C5Q.png" />

---

#### :turtle: Solution

==**Separate these two functions:**==

- One holds on to the state (doesn't get reloaded)
- Another contains all the state change logic (can be reloaded because doesn't hold state)

---

<img src="https://cdn-images-1.medium.com/max/800/1*nBsGCWmJTR-Zj7aXeIE8yg.png" />


#### Problem 2: The state is being rewritten with every action

In time travel debugging, you keep track of each version of a state object. That way, you can go back to an earlier state.

To make it work, each version needs to be an entirely separate object so that you aren't accidentally changing past versions.

<img src="https://cdn-images-1.medium.com/max/800/1*4zODv5vgvKsi6Ts7TihsoA.png" />

---

#### :turtle: Solution

==**Copy the state and make changes to the copy:**==

When an action comes in to the store, don't handle it by changing the state. Instead, copy the state and make changes to the copy.

---

<img src="https://cdn-images-1.medium.com/max/800/1*wLRhZ0wtI0duLsigdxL1CA.png" />

#### Problem 3: There aren't good places for third-party plugins to jump in

When you're making developer tools, you need to be able to write them generically.

An example is logging. Let's say you want to console.log() every action as it comes in, and then console.log() the state that results from it.

In Flux, you'd have to subscribe to the dispatcher's updates and to updates from each store. But that's custom code, not something a third-party module can easily do.

<img src="https://cdn-images-1.medium.com/max/800/1*MG736zGtLMBbSkhwu4D3cA.png" />

---

#### :turtle: Solution

==**Make it easy to wrap parts of the system in other objects:**==

---

<img src="https://cdn-images-1.medium.com/max/800/1*5JaZSc3Jsn9PJY7daEDVDA.png" />

### References: 
[1] - https://code-cartoons.com/articles/a-cartoon-intro-to-redux/
[2] - https://redux.js.org/tutorials/essentials/part-1-overview-concepts