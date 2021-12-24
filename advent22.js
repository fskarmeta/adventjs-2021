

function countDecorations(bigTree) {
  let count = 0;
  const recurseTree = (tree) => {
    if (tree.right) recurseTree(tree.right);
    if (tree.left) recurseTree(tree.left);
    count += tree.value;
  };
  recurseTree(bigTree);
  return count;
}


const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

/*
          1
        /   \
       5     6
      /     / \
     7     5   1
    /
   3
  */

console.log(countDecorations(bigTree)); // 28
