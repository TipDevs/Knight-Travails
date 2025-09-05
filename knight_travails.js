function knightMoves(start, target) {
  if (start[0] === target[0] && start[1] === target[1]) return [start];
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];
  const queue = [[start, [start]]];
  const lastVisited = new Set([start.toString()]);
  while (queue.length > 0) {
    let [current, path] = queue.shift();
    let [x, y] = current;
    for (const [dx, dy] of moves) {
      let next = [x + dx, y + dy];
      if (
        next[0] >= 0 &&
        next[0] < 8 &&
        next[1] >= 0 &&
        next[1] < 8 &&
        !lastVisited.has(next.toString())
      ) {
        const newPath = [...path, next];
        if (next[0] === target[0] && next[1] === target[1]) return newPath;
        queue.push([next, newPath]);
        lastVisited.add(next.toString());
      }
    }
  }
  return null;
}

// pretty printer for knight moves result
function displayKnightMoves(start, target) {
  const path = knightMoves(start, target);
  if (path === null) {
    console.log(`No path found\n`);
    return null;
  }
  console.log(`You made it in ${path.length - 1} moves! Here's your path: \n`);
  path.forEach((position) => console.log(position));
  return path;
}
