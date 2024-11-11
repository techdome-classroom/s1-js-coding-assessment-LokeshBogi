const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;  // If the grid is empty, return 0 islands

  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function to perform DFS
  const dfs = (i, j) => {
    // Stack for DFS
    const stack = [[i, j]];
    grid[i][j] = 'W';  // Mark the current land as water to indicate it’s visited

    // Directions to move: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (stack.length > 0) {
      const [x, y] = stack.pop();

      // Explore all four possible directions
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        
        // Check bounds and if the cell is land ('L')
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 'L') {
          grid[nx][ny] = 'W';  // Mark as visited
          stack.push([nx, ny]);
        }
      }
    }
  };

  let islandCount = 0;

  // Iterate through the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {  // Found an unvisited land ('L')
        // Perform DFS to mark all connected landmasses
        dfs(i, j);
        // Increment the island count
        islandCount++;
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
