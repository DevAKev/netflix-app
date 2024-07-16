const fs = require("fs");
const path = require("path");

const components = [
  { name: "Header", subComponents: ["MobileNavbar", "DesktopNavbar"] },
  { name: "Footer", subComponents: ["MobileFooter", "DesktopFooter"] },
];

const updateIndexScss = (componentName) => {
  const indexScssPath = path.join(__dirname, "src", "styles", "index.scss");
  const importStatement = `@import './src/styles/components/${componentName}/${componentName}.scss';\n`;

  fs.appendFileSync(indexScssPath, importStatement, "utf8");
  console.log(`Chemin ajouté à index.scss pour ${componentName}`);
};

components.forEach((component) => {
  const componentDir = path.join(
    __dirname,
    "src",
    "components",
    component.name
  );
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  const componentContent = `
import React from 'react';
${component.subComponents
  .map((sub) => `import ${sub} from './${sub}';`)
  .join("\n")}

const ${component.name} = () => {
  return (
    <div className="${component.name.toLowerCase()}">
      ${component.subComponents.map((sub) => `<${sub} />`).join("\n      ")}
    </div>
  );
};

export default ${component.name};
`;

  fs.writeFileSync(
    path.join(componentDir, `${component.name}.js`),
    componentContent
  );

  component.subComponents.forEach((sub) => {
    const subComponentContent = `
import React from 'react';

const ${sub} = () => {
  return (
    <div className="${sub.toLowerCase()}">
      ${sub} Component
    </div>
  );
};

export default ${sub};
`;

    fs.writeFileSync(path.join(componentDir, `${sub}.js`), subComponentContent);
  });

  // Mettre à jour index.scss
  updateIndexScss(component.name);
  component.subComponents.forEach((sub) => updateIndexScss(sub));
});

console.log("Composants générés avec succès.");
