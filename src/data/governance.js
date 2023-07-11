// const people = [
//   { name: "Carsten", ctId: 622 }, 
//   { name: "Johannes", ctId: 1837 },
//   { name: "Maksim", ctId: 1950 },
//   { name: "Diazno", ctId: 966 },
//   { name: "Adrian", ctId: 890 },
//   { name: "Jordan", ctId: 565 },
//   { name: "Tobi", ctId: 580 },
// ];

const proPresenterOperator = {
  roleName: "ProPresenter Operator",
  purpose: {
    en_GB: "Creating a good visual experience for the audience at the venue and in the livestream",
    de_DE: "Schaffe eine großartige visuelle Erfahrung für die Menschen im Saal und im Livestream",
  },
};

const slidePreparation = {
  roleName: "Slide Preparation",
  purpose: {
    en_GB: "To prepare the slides for the presentation",
    de_DE: "Zum vorbereiten der Slides för die Präsentation",
  },
}

const visuals = {
  roleName: "Visuals",
  coreRoles: {
    circleLead: 580,
  },
  roles: [proPresenterOperator, slidePreparation],
  purpose: {
    en_GB: "Create a great visual experience in the venue and in the livestream.",
    de_DE: "Sorgt für eine großartige visuelle Erfahrung im Saal und im Livestream.",
  },
};

const soundEngineer = {
  roleName: "Sound Engineer",
  purpose: {
    en_GB: "Create a great sound experience both at the venue and in the livestream",
    de_DE: "Schaffe einen großartigen Mix im Saal und im Livestream",
  },
};

const stageEngineer = {
  roleName: "Stage Engineer",
  purpose: {
    en_GB: "Maximise sound check time by creating a smooth setup and supporting the worship team",
    de_DE: "Sorgt für maximale Zeit für den Soundcheck, indem für einen reibungslosen Aufbau gesorgt und das Worship Team unterstützt wird.",
  },
};

const audioVisuals = {
  roleName: "Audio/Visuals",
  coreRoles: {
    circleLead: 622,
    facilitator: 565,
    circleRep: 890,
  },
  roles: [soundEngineer, stageEngineer, visuals],
  purpose: {
    en_GB: "To strengthen and encourage the congregation in their discipleship and at the same time, to reach new people and the curious online and locally, with our music and preaching, so they too can experience Jesus and His family.",
    de_DE: "Die Gemeinde zu stärken und in ihrer Nachfolge zu ermutigen und gleichzeitig, neue Leute und Neugierige online und vor Ort, mit unserer Musik und Predigten zu erreichen, damit sie auch Jesus und seine Familie erleben können.",
  },
};

const worship = {
  roleName: "Worship",
  coreRoles: {
    circleLead: 1837,
    facilitator: 966,
    circleRep: 1950,
  },
  roles: [audioVisuals],
  purpose: {
    en_GB: "To promote the worship of Jesus and His family in the community and in the world.",
    de_DE: "Zu stellen, dass die Gemeinde Jesus und seine Familie in der Kommunikation und in der Welt erlebt.",
  },
}

// Make a tree out of a role mapping the roleName to a name attribute and treat roles as children
// If one node has no children, it is a leaf and should have a value attribute with a value of 10
const makeTree = (role) => {
  const tree = {
    name: role.roleName,
    children: [],
  };
  // map roles to children
  if (role.roles) {
    role.roles.forEach((childRole) => {
      tree.children.push(makeTree(childRole));
    });    
  } else {
    tree.value = 10;
  }
  return tree;
}

export const governance = makeTree(worship);
