import delay from "./delay";

export default async function tracePath(minDistances, startNodeObj, endNodeObj) {
  let startNode = [startNodeObj.row, startNodeObj.column];
  let endNode = [endNodeObj.row, endNodeObj.column];
  let current = minDistances[endNode].from;

  if (!current) return alert("No possible path");

  while (current.toString() !== startNode.toString()) {
    const currentNode = document.getElementById(`${current[0]}-${current[1]}`);
    currentNode.style.backgroundColor = "yellow";
    current = minDistances[current].from;
    await delay(10);
  };
};