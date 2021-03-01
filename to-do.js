function addRow() {
  function getInputText() {
    let input = document.getElementsByTagName('input')[0];
    return input.value;
  }
  function appendText(item, text) {
    let textNode = document.createTextNode(text);
    item.appendChild(textNode);
  }
  function getList() {
    let list = document.getElementsByTagName('ul')[0];
    return list;
  }
  function appendToList(list, item) {
    list.appendChild(item);
  }
  function aggregate() {
    let text = getInputText();
    let item = createItem();
    appendText(item, text);

    let list = getList();
    appendToList(list, item);
  }
  aggregate();
}
function createItem() {
  let li = document.createElement('li');
  return li;
}
function createDelBtn() {
  let delBtn = document.createElement('button');
}
function appendDelBtn(row) {
  let delBtn = createDelBtn();
  row.appendChild(delBtn);
}
}
window.addEventListener('keydown', function(e) { 
  if (e.code == 'Enter') {
    addRow();
  }
});
