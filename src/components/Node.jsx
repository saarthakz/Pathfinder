import React from 'react'

export default function Node({
  row,
  column,
  startKey,
  endKey,
  wallFlag,
  setWalls,
  startNode,
  setStartNode,
  endNode,
  setEndNode }) {

  return (
    <div 
    id={`${row}-${column}`} 
    className="Node" 
    onClick={() => {
      if (startKey) {
        const existingStart = document.getElementById(`${startNode.row}-${startNode.column}`);
        if (existingStart) existingStart.style.backgroundColor = "white";
        setStartNode({ row, column });
        document.getElementById(`${row}-${column}`).style.backgroundColor = "green";
      };
      
      if (endKey) {
        const existingEnd = document.getElementById(`${endNode.row}-${endNode.column}`);
        if (existingEnd) existingEnd.style.backgroundColor = "white"
        setEndNode({ row, column });
        document.getElementById(`${row}-${column}`).style.backgroundColor = "red";
      };
    }}
    onMouseMove={() => {
      if (wallFlag) {
        document.getElementById(`${row}-${column}`).style.backgroundColor = 'grey';
        setWalls((walls) => new Set(walls.add([row, column].toString())))
      };
    }}
    >
    </div>
  );
};
