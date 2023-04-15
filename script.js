//your JS code here. If required.
let node = document.getElementById("level");
let level = 0;
while (node.parentNode !== document.body) {
  node = node.parentNode;
  level++;
}
alert("The level of the element is: " + level);
