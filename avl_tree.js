/*
  avl_redblack_cheatsheet_and_examples.js

  PURPOSE:
  - Contains minimal, interview-ready JavaScript implementations and helpers for:
    1) Binary Search Tree (BST) - basic operations
    2) AVL Tree - insert + rotations + traversal + validations
    3) Red-Black Tree - insert + rotations + fixup + traversal (production-grade logic simplified for interviews)

  - Also contains a short Q&A cheat-sheet (as comments) with concise, high-quality answers expected in Google/Microsoft interviews.

  HOW TO USE:
  - Open this file in an editor or run with Node.js to execute the example usage at the bottom.

  NOTE:
  - These implementations are intended for learning, interviews, and small-scale testing.
  - They emphasize clarity and show the balancing logic interviewers expect. Delete operations for RB/AVL are omitted for brevity (you will rarely be asked to implement full delete in interviews).
*/

/////////////////////////////
//  INTERVIEW Q&A CHEAT SHEET
/////////////////////////////

/*
Q: What is an AVL tree? (short answer)
A: AVL is a self-balancing Binary Search Tree that maintains a height-balance factor (height(left)-height(right)) of -1,0,1 for every node. Rebalancing is done with rotations (LL, RR, LR, RL). Time complexities: search/insert/delete O(log n).

Q: What is a Red-Black Tree? (short answer)
A: A Red-Black Tree is a binary search tree with an extra color bit on nodes (red or black) and rules that ensure roughly balanced heights: root black, no two consecutive red nodes, equal black-height on all root-to-leaf paths. Less strict than AVL, fewer rotations; used in many std library maps/sets.

Q: AVL vs Red-Black: when to use which?
A: AVL is stricter → better search performance; Red-Black is laxer → fewer rotations, faster inserts/deletes. Use AVL when reads >> writes; RBT for general-purpose ordered maps (e.g., TreeMap).

Q: Name the 4 rotation cases in AVL and give the corrective action.
A: LL -> Right rotate; RR -> Left rotate; LR -> Left rotate left child, then right rotate node; RL -> Right rotate right child, then left rotate node.

Q: What is Black-Height in RB trees?
A: The number of black nodes from a node to any leaf (null leaf) must be the same for all paths.
*/

/////////////////////////////
//  SIMPLE BINARY SEARCH TREE
/////////////////////////////

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) return new BSTNode(value);
    if (value < node.value) node.left = this._insert(node.left, value);
    else if (value > node.value) node.right = this._insert(node.right, value);
    // ignore duplicates
    return node;
  }

  search(value) {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return cur;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return null;
  }

  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }
}

/////////////////////////////
//  AVL TREE IMPLEMENTATION
/////////////////////////////

class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // node height (leaf = 1)
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // helper: node height
  height(node) {
    return node ? node.height : 0;
  }

  // helper: update height
  updateHeight(node) {
    if (node) node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // balance factor
  balanceFactor(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  // right rotate
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // rotation
    x.right = y;
    y.left = T2;

    // update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  // left rotate
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // rotation
    y.left = x;
    x.right = T2;

    // update heights
    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  // insert public
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  // recursive insert with rebalancing
  _insert(node, value) {
    if (!node) return new AVLNode(value);

    if (value < node.value) node.left = this._insert(node.left, value);
    else if (value > node.value) node.right = this._insert(node.right, value);
    else return node; // duplicates not allowed

    // update height
    this.updateHeight(node);

    const bf = this.balanceFactor(node);

    // LL
    if (bf > 1 && value < node.left.value) return this.rightRotate(node);

    // RR
    if (bf < -1 && value > node.right.value) return this.leftRotate(node);

    // LR
    if (bf > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // RL
    if (bf < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node; // balanced
  }

  // search
  search(value) {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return cur;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return null;
  }

  // in-order traversal -> sorted order
  inOrder(node = this.root, res = []) {
    if (!node) return res;
    this.inOrder(node.left, res);
    res.push(node.value);
    this.inOrder(node.right, res);
    return res;
  }

  // validate AVL property (for testing)
  isBalanced(node = this.root) {
    if (!node) return true;
    const lh = this.height(node.left);
    const rh = this.height(node.right);
    if (Math.abs(lh - rh) > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
}

/////////////////////////////
//  RED-BLACK TREE (Insertion + Fixup)
// NOTE: This is a compact, interview-focused implementation. Delete is omitted.
/////////////////////////////

const RED = 0;
const BLACK = 1;

class RBNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = RED; // new nodes are red by default
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // left rotate around x
  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left) y.left.parent = x;
    y.parent = x.parent;
    if (!x.parent) this.root = y;
    else if (x === x.parent.left) x.parent.left = y;
    else x.parent.right = y;
    y.left = x;
    x.parent = y;
  }

  // right rotate around y
  rightRotate(y) {
    const x = y.left;
    y.left = x.right;
    if (x.right) x.right.parent = y;
    x.parent = y.parent;
    if (!y.parent) this.root = x;
    else if (y === y.parent.left) y.parent.left = x;
    else y.parent.right = x;
    x.right = y;
    y.parent = x;
  }

  // BST insert (like normal), returns inserted node
  bstInsert(value) {
    let node = new RBNode(value);
    let y = null;
    let x = this.root;
    while (x !== null) {
      y = x;
      if (node.value < x.value) x = x.left;
      else if (node.value > x.value) x = x.right;
      else return null; // duplicate, ignore
    }
    node.parent = y;
    if (!y) this.root = node;
    else if (node.value < y.value) y.left = node;
    else y.right = node;
    return node;
  }

  // fix violations after insert
  insert(value) {
    const z = this.bstInsert(value);
    if (!z) return; // duplicate

    // standard RB insert fixup
    let node = z;
    while (node !== this.root && node.parent.color === RED) {
      if (node.parent === node.parent.parent.left) {
        const y = node.parent.parent.right; // uncle
        if (y && y.color === RED) {
          // case 1: uncle red
          node.parent.color = BLACK;
          y.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // case 2: node is right child
            node = node.parent;
            this.leftRotate(node);
          }
          // case 3: node is left child
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rightRotate(node.parent.parent);
        }
      } else {
        // mirror cases: parent is right child
        const y = node.parent.parent.left; // uncle
        if (y && y.color === RED) {
          // case 1
          node.parent.color = BLACK;
          y.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // case 2
            node = node.parent;
            this.rightRotate(node);
          }
          // case 3
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = BLACK; // rule: root is black
  }

  // in-order traversal (sorted values)
  inOrder(node = this.root, res = []) {
    if (!node) return res;
    this.inOrder(node.left, res);
    res.push({ value: node.value, color: node.color === RED ? 'R' : 'B' });
    this.inOrder(node.right, res);
    return res;
  }

  // helper: verify RB properties (basic checks)
  validateProperties() {
    // 1) root is black
    if (this.root && this.root.color !== BLACK) return { valid: false, reason: 'Root is not black' };

    // 2) no two consecutive red nodes
    const dfsCheck = (node) => {
      if (!node) return { valid: true, blackCount: 1 }; // null leaf contributes 1 black count
      if (node.color === RED) {
        if ((node.left && node.left.color === RED) || (node.right && node.right.color === RED)) {
          return { valid: false, reason: 'Consecutive red nodes' };
        }
      }
      const left = dfsCheck(node.left);
      if (!left.valid) return left;
      const right = dfsCheck(node.right);
      if (!right.valid) return right;
      if (left.blackCount !== right.blackCount) return { valid: false, reason: 'Black-height mismatch' };
      return { valid: true, blackCount: left.blackCount + (node.color === BLACK ? 1 : 0) };
    };

    return dfsCheck(this.root);
  }
}

/////////////////////////////
//  EXAMPLE USAGE & QUICK TESTS
/////////////////////////////

if (require.main === module) {
  console.log('\n--- BST example ---');
  const bst = new BST();
  [10, 20, 5, 4, 8].forEach(x => bst.insert(x));
  console.log('BST inOrder:', bst.inOrder());
  console.log('BST search 8:', !!bst.search(8));

  console.log('\n--- AVL example ---');
  const avl = new AVLTree();
  [10, 20, 30, 40, 50, 25].forEach(x => avl.insert(x));
  console.log('AVL inOrder (sorted):', avl.inOrder());
  console.log('AVL balanced?:', avl.isBalanced());

  console.log('\n--- Red-Black Tree example ---');
  const rbt = new RedBlackTree();
  [10, 20, 30, 15, 25, 5, 1].forEach(x => rbt.insert(x));
  console.log('RBT inOrder (value,color):', rbt.inOrder());
  console.log('RBT validation:', rbt.validateProperties());

  console.log('\n--- Quick Q&A reminder ---');
  console.log('AVL vs RBT: AVL stricter (better search), RBT fewer rotations (better inserts).');
}





/*
============================================================
APPLICATIONS OF RED-BLACK TREE (MOST IMPORTANT)
============================================================
Real world systems using Red-Black Trees:


1. C++ STL
- std::map
- std::set


2. Java Collections
- TreeMap
- TreeSet


3. Linux Completely Fair Scheduler (CFS)
- Uses Red-Black Tree to store runnable tasks
- Ensures near O(log n) insert/delete with minimal rotations


4. Windows NT kernel


5. Many database engines (internal balancing)


Reason: Red-Black uses fewer rotations → more efficient in practice.


============================================================
AVL vs Red-Black (EXACT INTERVIEW TABLE)
============================================================
| Feature | AVL | Red-Black |
|--------|------|------------|
| Balance strictness | Very strict | Moderate |
| Search speed | Faster | Slightly slower |
| Insert/Delete | Slower | Faster |
| Rotations | More | Fewer |
| Used in libraries | Rare | Very common |
| Best for | Search-heavy | Insert/Delete heavy |


============================================================
TOP GOOGLE / MICROSOFT INTERVIEW Q&A (COPY THESE VERBATIM)
============================================================


Q1: Why do we need balanced trees?
A1: Because an unbalanced BST becomes O(n) in worst case. Balanced trees guarantee O(log n) height.


Q2: Why use AVL trees?
A2: AVL provides the fastest search operations due to strict balancing.


Q3: Why use Red-Black Trees?
A3: They reduce the number of rotations, making insert/delete operations more efficient.


Q4: Why do languages implement Red-Black Trees instead of AVL?
A4: Red-Black Trees perform fewer rotations and provide more practical runtime performance for mixed workloads.


Q5: Which tree does Linux scheduler use and why?
A5: Linux CFS uses a Red-Black Tree because it provides predictable O(log n) operations with minimal balancing overhead.


Q6: Should you implement AVL or RBT in interviews?
A6: No. You only explain concepts. You implement BST + rotation logic only if asked.


============================================================
WHEN TO USE WHAT (1-LINE ANSWER)
============================================================
- Use AVL when searches dominate.
- Use Red-Black when inserts/deletes dominate.
- Use Red-Black in production systems (maps, sets, OS schedulers).
- Use AVL when you need minimal height and strict balancing.
*/