import delay from "./delay";

export default async function pathfinder(grid, rows, columns, startNode, endNode) {
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
  const minDistances = {};
  const queue = new Array();
  queue.push(start);
  visited.add(start);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === startingRow && j === startingColumn)
        minDistances[[i, j]] = {
          from: [i, j],
          distance: 0,
        };
      else minDistances[[i, j]] = {
        from: undefined,
        distance: Infinity,
      };
    };
  };

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.toString() == target.toString()) return minDistances;
    if (!visited.has(current.toString())) {
      document.getElementById(`${current[0]}-${current[1]}`).style.backgroundColor = "blue";
      if (current.toString() == start.toString())
        document.getElementById(`${current[0]}-${current[1]}`).style.backgroundColor = "green";
      const currentDistance = minDistances[current].distance;
      visited.add(current.toString());
      const currentNeighbours = getNeighbours(current[0], current[1]);
      currentNeighbours.forEach((neighbour) => {
        if (minDistances[neighbour]) {
          const currentNeighbourDistance = 1 + currentDistance;
          if (minDistances[neighbour].distance > currentNeighbourDistance) {
            minDistances[neighbour] = {
              from: current,
              distance: currentNeighbourDistance
            };
            if (visited.has(neighbour.toString())) visited.delete(neighbour.toString());
          };
          queue.push(neighbour);
        };
      });
      await delay(10);
    };
  };
  return minDistances;
};

function getNeighbours(row, column) {
  return [
    [row - 1, column],
    [row, column + 1],
    [row + 1, column],
    [row, column - 1],
  ];
};