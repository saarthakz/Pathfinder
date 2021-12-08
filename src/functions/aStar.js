import delay from "./delay";

export default async function aStarFunc(grid, rows, columns, startNode, endNode, walls) {
  if (startNode.row === undefined) {
    alert("Set Start Node");
    return;
  };

  if (endNode.row === undefined) {
    alert("Set End Node");
    return;
  };

  const target = [endNode.row, endNode.column];
  const startingRow = startNode.row;
  const startingColumn = startNode.column;
  const start = [startingRow, startingColumn];
  const visited = new Set();
  const minCosts = {};
  const queue = new Array();
  queue.push(start);
  visited.add(start);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === startingRow && j === startingColumn)
        minCosts[[i, j]] = {
          from: [i, j],
          distance: 0,
          cost: 0,
        };
      else minCosts[[i, j]] = {
        from: undefined,
        distance: Infinity,
        cost: Infinity,
      };
      minCosts[[i, j]].estDistFromTarget = estDistFromTarget([i, j], target);
    };
  };
  while (queue.length > 0) {
    const current = removeFromArray(queue, getMinIndex(queue, minCosts));
    if (current.toString() === target.toString()) return minCosts;
    if (walls.has(current.toString())) continue;
    if (!visited.has(current.toString())) {
      document.getElementById(`${current[0]}-${current[1]}`).style.backgroundColor = "blue";
      if (current.toString() === start.toString())
        document.getElementById(`${current[0]}-${current[1]}`).style.backgroundColor = "green";
      const currentDistance = minCosts[current].distance;
      visited.add(current.toString());
      const currentNeighbours = getNeighbours(current[0], current[1]);
      currentNeighbours.forEach((neighbour) => {
        if (minCosts[neighbour]) { // Out of grid filter
          const neighbourDistance = 1 + currentDistance;
          const neighbourCost = neighbourDistance + minCosts[neighbour].estDistFromTarget;
          if (minCosts[neighbour].cost > neighbourCost) {
            minCosts[neighbour].from = current;
            minCosts[neighbour].distance = currentDistance;
            minCosts[neighbour].cost = neighbourCost;
          };
          queue.push(neighbour);
        };
      });
      await delay(10);
    };
  };
  console.log("Done");
  return minCosts;
};

function getNeighbours(row, column) {
  return [
    [row - 1, column],
    // [row - 1, column + 1], // diagonal
    [row, column + 1],
    // [row + 1, column + 1], // diagonal
    [row + 1, column],
    // [row + 1, column - 1], // diagonal
    [row, column - 1],
    // [row - 1, column - 1], // diagonal
  ];
};

function getMinIndex(queue, minCosts) {
  let minIndex = 0;
  for (let i = 0; i < queue.length; i++) {
    if (minCosts[queue[i]].cost < minCosts[queue[minIndex]].cost) minIndex = i;
  };
  return minIndex;
};

function removeFromArray(arr, index) {
  return arr.splice(index, 1)[0];
};

// function estDistFromTarget(start, end) {
//   const deltaX = start[0] - end[0];
//   const deltaY = start[1] - end[1];
//   return Math.sqrt(deltaX ** 2 + deltaY ** 2);
// }

function estDistFromTarget(start, end) {
  return (Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]));
}