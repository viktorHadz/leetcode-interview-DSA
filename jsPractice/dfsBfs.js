const graph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: [],
};

// Exercise 1 — Print DFS
function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) {
        console.log("visited.has(node) condition met: ", visited);
        return;
    }

    visited.add(node);
    console.log("node: ", node);

    for (const neighbor of graph[node]) {
        dfs(graph, neighbor);
    }
}
