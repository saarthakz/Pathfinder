import React, { useState, useEffect, useContext } from 'react';
import "./Grid.css";
import pathfinderFunc from '../functions/pathfinder';
import aStarFunc from '../functions/aStar';
import tracePath from '../functions/tracePath';
import Node from './Node';
import { pathfinderContext } from '../contexts/pathfinderContext';
import { aStarContext } from '../contexts/aStarContext';

export default function Grid() {

  const rows = 20;
  const columns = 40;
  const grid = new Array();
  const [startKey, setStartKey] = useState(false);
  const [endKey, setEndKey] = useState(false);
  const [wallFlag, setWallFlag] = useState(false);
  const [pathfinder, setPathfinder] = useContext(pathfinderContext);
  const [aStar, setAStar] = useContext(aStarContext);
  const [walls, setWalls] = useState(new Set());

  const [startNode, setStartNode] = useState({
    row: undefined,
    column: undefined
  });
  const [endNode, setEndNode] = useState({
    row: undefined,
    column: undefined
  });

  // Generating Grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      grid.push(<Node 
        row={i} 
        column={j} 
        key={`${i}-${j}`} 
        startKey={startKey}
        endKey={endKey}
        wallFlag={wallFlag}
        setWalls={setWalls}
        startNode={startNode}
        setStartNode={setStartNode}
        endNode={endNode}
        setEndNode={setEndNode}
      />);
    };
  };

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "s") {
        setStartKey(true);
      };

      if (evt.key === "e") {
        setEndKey(true)
      };
    });

    document.addEventListener("keyup", (evt) => {
      if (evt.key === "s") {
        setStartKey(false);
      };

      if (evt.key === "e") {
        setEndKey(false)
      };
    });

    document.addEventListener("mousedown", () => {
      setWallFlag(true);
    });

    document.addEventListener("mouseup", () => {
      setWallFlag(false);
    });
  })

  useEffect(() => {
    (async () => {
      if (pathfinder) {
        const minDistances = await pathfinderFunc(grid, rows, columns, startNode, endNode, walls);
        if (minDistances) await tracePath(minDistances, startNode, endNode);
      };
    })()

  }, [pathfinder])
  useEffect(() => {
    (async () => {
      if (aStar) {
        const minCosts = await aStarFunc(grid, rows, columns, startNode, endNode, walls);
        if (minCosts) await tracePath(minCosts, startNode, endNode);
      };
    })()
  }, [aStar])

  return (
    <div id="Grid" className="Grid">
      {grid.map((elem) => elem)}
    </div>
  );
}
