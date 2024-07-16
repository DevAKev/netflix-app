module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Créer un nouveau composant",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nom du composant ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/Component.scss.hbs",
      },
    ],
  });
};
