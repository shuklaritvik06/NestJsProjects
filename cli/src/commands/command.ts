import { Command, CommandRunner, Option } from 'nest-commander';

interface CommandOptions {
  string?: string;
  index?: string;
}

@Command({ name: 'crud', description: 'A crud command line tool' })
export class CRUDCommands extends CommandRunner {
  todos: any[];
  constructor() {
    super();
    this.todos = [];
  }

  async run(passedParam: string[], options?: CommandOptions): Promise<void> {
    if (options.index != undefined && options.string != undefined) {
      this.updateTodo(options.index, options.string);
    } else if (options.index != undefined) {
      this.deleteTodo(options.index);
    } else if (options.string != undefined) {
      this.addTodo(options.string);
    } else if (options.index == undefined && options.string == undefined) {
      this.listTodos();
    }
  }
  listTodos() {
    this.todos.forEach((todo, index) => {
      console.log(`${index}: ${todo}`);
    });
  }

  @Option({
    flags: '-a, --add [string]',
    description: 'Add Todo',
  })
  addTodo(val: string) {
    this.todos.push(val);
  }

  @Option({
    flags: '-d, --delete [index]',
    description: 'Delete Todo',
  })
  deleteTodo(index: string) {
    this.todos.splice(parseInt(index), 1);
    console.log('Deleted Todo');
  }

  @Option({
    flags: '-u, --update [index] [string]',
    description: 'Update Todo',
  })
  updateTodo(index: string, val: string) {
    this.todos[parseInt(index)] = val;
    console.log('Updated Todo');
  }
}
