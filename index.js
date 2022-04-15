const insertNode = document.getElementById("insertNode");
const searchNode = document.getElementById("searchNode");
const clearNode = document.getElementById("clearNode");

class LinearSearch {
  constructor() {
    this.node = [];
    this.headNode;
    this.tailNode;
  }
  insertNode() {
    let head = prompt("ENTER THE HEAD VALUE ");
    let tail = prompt("ENTER THE TAIL VALUE ");
    if (head === null || head == "" || tail === null || tail == "") {
      return;
    } else if (isNaN(head) || isNaN(tail)) {
      alert("ENTER ONLY NUMBERS !");
      return;
    } else if (head >= tail) {
      alert("OOPS! HEAD IS GREATER THAN TAIL");
      return;
    } else {
      this.headNode = Number(head);
      this.tailNode = Number(tail);
      for (let i = this.headNode; i <= this.tailNode; i++) {
        this.node.push(i);
      }
    }
    console.log(this.node);
  }
  searchNode() {
    let searchVal = prompt(
      `ENTER THE VALUE ${this.headNode} to ${this.tailNode}`
    );
    if (searchVal === null || searchVal === "") {
      return;
    } else if (isNaN(searchVal)) {
      alert("NUMBERS ONLY ACCEPTED");
      return;
    } else {
      for (let i = 0; i < this.node.length; i++) {
        if (Number(searchVal) === this.node[i]) {
          alert(`VALUE FOUND AT INDEX [${i}] - THE VALUE IS ${this.node[i]}`);
          return;
        }
      }
    }
  }
  clearNode() {
    this.node = [];
    alert(`NODE IS CLEAR LENGTH OF NODE ${this.node.length}`);
  }
}
let linearSearch = new LinearSearch();
insertNode.addEventListener("click", () => linearSearch.insertNode());
searchNode.addEventListener("click", () => linearSearch.searchNode());
clearNode.addEventListener("click", () => linearSearch.clearNode());
