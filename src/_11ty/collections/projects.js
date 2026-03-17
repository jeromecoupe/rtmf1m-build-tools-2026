/**
 * export sorted projects collection
 */

function projects(collectionApi) {
  const projects = collectionApi
    .getFilteredByGlob("./src/projects/*.md")
    .sort((a,b) => a.data.year - b.data.year);
  
  return projects;
}

export { projects }