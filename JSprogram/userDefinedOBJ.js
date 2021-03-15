function Employee(id, name) {
    this.id = id;
    this.name = name;

    this.display = function () {
        document.write("<br> id is " + this.id);
        document.write("<br> name is " + this.name);
    }
}
var emp1 = new Employee(200, "Andrew");
emp1.display();
