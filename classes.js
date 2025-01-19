class LinkedList {
  constructor() {
    this.start = null;
  }

  append(value) {
    let node = new Node();
    node.value = value;

    let current;

    if (this.start == null) {
      this.start = node;
      return;
    } else current = this.start;

    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = node;
  }

  prepend(value) {
    let node = new Node();
    node.value = value;

    if (this.start == null) this.start = node;

    let next = this.start;
    this.start = node;
    node.nextNode = next;
  }

  size() {
    let result = 1;
    let current = this.start;
    while (current.nextNode) {
      current = current.nextNode;
      result++;
    }
    result++;

    console.log(`The size of the list is ${result}`);

    return result;
  }

  head() {
    console.log(this.start.value);

    return this.start.value;
  }

  tail() {
    let current = this.start;

    while (current.nextNode) {
      current = current.nextNode;
    }

    console.log(current.value);

    return current.value;
  }

  at(index) {
    let i = 0;
    let current = this.start;

    while (current.nextNode && i != index) {
      current = current.nextNode;
      i++;
    }

    console.log(current.value);
    return current.value;
  }

  pop() {
    let current = this.start;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.start;

    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) return console.log(true);
    }
    return console.log(false);
  }

  find(value) {
    let current = this.start;
    let i = 0;

    while (current.nextNode) {
      current = current.nextNode;
      i++;
      if (current.value === value) return console.log(i);
    }
    return console.log(null);
  }

  insertAt(value, index) {
    let node = new Node();
    node.value = value;
    let current = this.start;
    let i = 0;

    while (current.nextNode && i + 1 != index) {
      current = current.nextNode;
      i++;
    }
    node.nextNode = current.nextNode;
    current.nextNode = node;
  }

  removeAt(index) {
    let current = this.start;
    let i = 0;

    while (current.nextNode.nextNode && i + 1 != index) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = current.nextNode.nextNode;
  }

  toString() {
    let string = "";
    let current = this.start;

    while (current) {
      string = string.concat(`( ${current.value} ) -> `);
      current = current.nextNode;
    }
    string = string.concat("null");
    console.log(string);
    return string;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export { LinkedList };