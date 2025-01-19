import { LinkedList } from "./classes.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("elephant");
list.head();
list.size();
list.tail();
list.at(3);
list.pop();
list.contains("turtle");
list.find("snake");
list.insertAt("eagle", 2);
list.removeAt(3);

list.toString();