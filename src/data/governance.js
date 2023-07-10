export const governance  = {
  name: "team",
  children: [{
    name: "analytics",
    children: [{
      name: "reporting",
      children: [{
        name: "data-science",
        value: 2,
      }, {
        name: "warehouse",
        value: 2,
      }],
    }, {
      name: "machine-learning",
      value: 2,
    }],
  }, {
    name: "engineering",
    children: [{
      name: "architecture",
      value: 2,
    }, {
      name: "design",
      value: 2,
    }],
  }],
}