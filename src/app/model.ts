export class Model {
    user;
    items;

    constructor(){
        this.user = "Cem";
        this.items = [
            new ToDoItem("Kahvaltı",true),
            new ToDoItem("Sinema",false),
            new ToDoItem("Spor",false),
            new ToDoItem("Ders Çalışma",false),
        ];        
    }
}

export class ToDoItem {
    description;
    action;

    constructor(description, action){
        this.description = description;
        this.action = action;
    }
}