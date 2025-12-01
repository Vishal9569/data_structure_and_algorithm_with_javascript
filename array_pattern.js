// ========================
// ARRAY PATTERNS CHEATSHEET (JS)
// Most used in FAANG interviews
// Each pattern includes: TEMPLATE + USAGE COMMENT
// ========================

// ----------------------------------------
// 1) TWO POINTER (sorted arrays or after sort)
// ----------------------------------------
// Usage:
// - Pairs/triples with sum
// - Removing duplicates
// - Left/right decisions
// - Works best when array sorted

function twoPointer(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return [l, r];
    if (sum < target) l++;
    else r--;
  }
  return null;
}

// 3Sum (classic pattern)
function threeSum(nums) {
  nums.sort((a,b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate
    let l = i + 1, r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return res;
}


// ----------------------------------------
// 2) SLIDING WINDOW (fixed + variable)
// ----------------------------------------
// Usage:
// - Longest/shortest substring or subarray
// - Maintain running sum/frequencies
// - Usually requires non-negative values for variable window

// Fixed window (size k)
function maxSumSubarray(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let maxSum = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// Variable sliding window
function minSubArrayLen(target, nums) {
  let l = 0, sum = 0, res = Infinity;
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      res = Math.min(res, r - l + 1);
      sum -= nums[l++];
    }
  }
  return res === Infinity ? 0 : res;
}


// ----------------------------------------
// 3) KADANE (max subarray sum)
// ----------------------------------------
// Usage:
// - Max contiguous subarray sum
// - Core DP pattern for sums

function maxSubArray(nums) {
  let curr = 0, best = -Infinity;
  for (const x of nums) {
    curr = Math.max(x, curr + x);
    best = Math.max(best, curr);
  }
  return best;
}


// ----------------------------------------
// 4) PREFIX SUM / HASHMAP
// ----------------------------------------
// Usage:
// - Subarray sum == k (supports negatives)
// - Range sum queries

function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let prefix = 0, count = 0;

  for (const x of nums) {
    prefix += x;
    if (map.has(prefix - k)) count += map.get(prefix - k);
    map.set(prefix, (map.get(prefix) || 0) + 1);
  }
  return count;
}


// ----------------------------------------
// 5) HASH MAP / FREQUENCY
// ----------------------------------------
// Usage:
// - Two sum
// - Frequency constraints
// - Grouping values

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return null;
}


// ----------------------------------------
// 6) SORT + GREEDY
// ----------------------------------------
// Usage:
// - Intervals
// - Minimal operations

function mergeIntervals(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  const res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}


// ----------------------------------------
// 7) BINARY SEARCH (index & answer)
// ----------------------------------------
// Usage:
// - Sorted arrays
// - Rotated arrays
// - Monotonic boolean check

function lowerBound(arr, target) {
  let l = 0, r = arr.length;
  while (l < r) {
    const mid = (l + r) >>> 1;
    if (arr[mid] < target) l = mid + 1;
    else r = mid;
  }
  return l;
}

// Binary search on answer
function binarySearchOnAnswer(check, low, high) {
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (check(mid)) high = mid;
    else low = mid + 1;
  }
  return low;
}


// ----------------------------------------
// 8) MONOTONIC STACK / DEQUE
// ----------------------------------------
// Usage:
// - Next greater element
// - Sliding window max
// - Histogram rectangle

function nextGreater(nums) {
  const res = Array(nums.length).fill(-1);
  const stack = []; // store indices

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = nums[i];
    }
    stack.push(i);
  }
  return res;
}

// Sliding window max
function maxSlidingWindow(nums, k) {
  const dq = []; // indices in decreasing order
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    while (dq.length && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
    dq.push(i);

    if (dq[0] === i - k) dq.shift();
    if (i >= k - 1) res.push(nums[dq[0]]);
  }
  return res;
}


// ----------------------------------------
// 9) HEAPS (simulated with sort or custom heap)
// ----------------------------------------
// Usage:
// - Top K
// - Priority scheduling

function topKFrequent(nums, k) {
  const map = new Map();
  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);
  const arr = [...map.entries()];
  arr.sort((a,b) => b[1] - a[1]);
  return arr.slice(0, k).map(e => e[0]);
}


// ----------------------------------------
// 10) BITMASK PATTERN
// ----------------------------------------
// Usage:
// - Subset generation
// - Small N brute force

function subsets(nums) {
  const res = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); mask++) {
    const sub = [];
    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) sub.push(nums[i]);
    }
    res.push(sub);
  }
  return res;
}


// ----------------------------------------
// 11) MATRIX BFS/DFS (4-direction)
// ----------------------------------------
// Usage:
// - Grid traversal
// - Islands
// - Shortest path BFS

const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

function bfsGrid(grid, sr, sc) {
  const q = [[sr, sc]];
  const visited = new Set([`${sr},${sc}`]);

  while (q.length) {
    const [r, c] = q.shift();

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;

      if (
        nr >= 0 && nr < grid.length &&
        nc >= 0 && nc < grid[0].length &&
        !visited.has(`${nr},${nc}`) &&
        grid[nr][nc] === 1
      ) {
        visited.add(`${nr},${nc}`);
        q.push([nr, nc]);
      }
    }
  }
  return visited.size; // count connected area
}


// ----------------------------------------
// 12) DIVIDE & CONQUER (count inversions)
// ----------------------------------------
// Usage:
// - Count inversions
// - Patterns from merge sort

function countInversions(arr) {
  function mergeSort(a) {
    if (a.length <= 1) return [a, 0];
    const mid = a.length >> 1;
    const [left, inv1] = mergeSort(a.slice(0, mid));
    const [right, inv2] = mergeSort(a.slice(mid));

    const merged = [];
    let i = 0, j = 0, inv = inv1 + inv2;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) merged.push(left[i++]);
      else {
        merged.push(right[j++]);
        inv += left.length - i;
      }
    }
    return [merged.concat(left.slice(i)).concat(right.slice(j)), inv];
  }

  return mergeSort(arr)[1];
}

// ========================
// END OF CHEAT SHEET
// ========================