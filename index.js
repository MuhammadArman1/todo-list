import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const task = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what you want to add in your todos",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "what you want to add another todos",
            default: "false",
        },
    ]);
    todos.push(task.todo);
    condition = task.addMore;
    console.log(todos);
}
