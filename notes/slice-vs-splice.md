# Slice() vs Splice()

### 🧩 **1. `slice()`**

- **Purpose:** To extract a _portion_ of an array (or string) **without modifying** the original array.
- **Returns:** A **new array** containing the selected elements.
- **Does not mutate** the original array.

#### **Syntax**

```js
array.slice(start, end);
```

- `start`: index where extraction begins (inclusive).
- `end`: index where extraction stops (exclusive).

#### **Example**

```js
const fruits = ["apple", "banana", "cherry", "date"];

const sliced = fruits.slice(1, 3);
console.log(sliced); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']  <-- unchanged
```

✅ **Use when:** You want a _copy_ or _portion_ of an array **without changing** the original.

---

### 🔧 **2. `splice()`**

- **Purpose:** To _add_, _remove_, or _replace_ elements **in place**.
- **Modifies** the original array.
- **Returns:** An array of **removed elements**.

#### **Syntax**

```js
array.splice(start, deleteCount, item1, item2, ...)
```

- `start`: index where changes begin.
- `deleteCount`: number of elements to remove.
- `item1, item2, ...`: optional elements to add at that position.

#### **Examples**

**Remove elements**

```js
const fruits = ["apple", "banana", "cherry", "date"];

const removed = fruits.splice(1, 2);
console.log(removed); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'date']  <-- modified
```

**Add elements**

```js
const fruits = ["apple", "banana"];

fruits.splice(1, 0, "cherry", "date");
console.log(fruits); // ['apple', 'cherry', 'date', 'banana']
```

**Replace elements**

```js
const fruits = ["apple", "banana", "cherry"];

fruits.splice(1, 1, "grape");
console.log(fruits); // ['apple', 'grape', 'cherry']
```

✅ **Use when:** You need to **change** the original array (add, remove, or replace).

---

### 🧠 **Quick Comparison Table**

| Feature               | `slice()`              | `splice()`                          |
| --------------------- | ---------------------- | ----------------------------------- |
| **Purpose**           | Extracts part of array | Modifies array (add/remove/replace) |
| **Returns**           | New array              | Removed elements                    |
| **Mutates original?** | ❌ No                  | ✅ Yes                              |
| **Common use case**   | Copy or subset         | Modify array contents               |

---

### 🧪 Bonus Tip:

To **clone** an array:

```js
const copy = arr.slice();
```

To **empty** an array using `splice`:

```js
arr.splice(0, arr.length);
```

---
