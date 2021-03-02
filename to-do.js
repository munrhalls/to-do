function append(element) {
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(element);
}
function createListInterface() {
  var interface = document.createElement('div');
  interface.style.display = 'flex';

  function createTextField() {
    var textField = document.createElement('input');
    textField.style.type = 'text';
    textField.style.width = '45%';
    textField.style.height = '1.5rem';
    textField.style.border = '3px solid #000';
    textField.style.borderRadius = '0.5rem';
    textField.style.textDecoration = 'none';
    textField.style.padding = '0.25rem 0.5rem';
    textField.style.fontSize = '1rem';
    interface.appendChild(textField);
  }
  // in congruence with domino flow
  function createAddBtn() {
    var addBtn = document.createElement('div');
    let sign = document.createElement('div');
    sign.innerText = '+';
    sign.style.fontSize = '1rem';
    sign.style.fontWeight = 'bold';
    sign.style.margin = '0.25rem';
    sign.style.color = 'green';
    addBtn.appendChild(sign);
    addBtn.style.textAlign = 'center';
    addBtn.style.width = '1.5rem';
    addBtn.style.height = '1.5rem';
    addBtn.style.border = '6px solid #020202';
    addBtn.style.borderRadius = '0.5rem';
    addBtn.style.textDecoration = 'none';
    addBtn.style.backgroundColor = 'black';
    addBtn.onclick = function(e) {
      var text = document.getElementsByTagName('input')[0].value;
      var li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.width = '50%'; 
      var textNode = document.createTextNode(text);
      var p = document.createElement('span');
      p.appendChild(textNode);
      function createCheckBtn() {
        var checkBtn = document.createElement('div');

        var checked = document.createElement('div');
        checked.id = "checked";
        checked.style.backgroundColor = 'white';
        checked.style.border = '3px solid black';
        checked.style.borderRadius = '0.5rem';
        checked.style.width = '1.5rem';
        checked.style.height = '1.5rem';
        checked.style.textAlign = 'center';
        checked.style.marginRight = '3rem';
        var sign = document.createElement('span');
        sign.style.color = 'green';
        sign.style.fontWeight = 'bold';
        sign.style.fontSize = '2.25rem';
        sign.style.position = 'relative';
        sign.style.top= '-1rem';

        var textNode = document.createTextNode('✓');
        sign.appendChild(textNode);
        checked.appendChild(sign);

        var unchecked = document.createElement('div');
        unchecked.id = "unchecked";
        unchecked.style.backgroundColor = 'white';
        unchecked.style.border = '3px solid black';
        unchecked.style.borderRadius = '0.5rem';
        unchecked.style.width = '1.5rem';
        unchecked.style.height = '1.5rem';
        unchecked.style.textAlign = 'center';
        unchecked.style.marginRight = '3rem';
        var sign = document.createElement('span');
        sign.style.color = 'white';
        sign.style.fontWeight = 'bold';
        var textNode = document.createTextNode('▢');
        sign.appendChild(textNode);
        unchecked.appendChild(sign);

        checkBtn.appendChild(unchecked);
        checkBtn.onclick = function(e) {
          var elClicked = e.target;
          var stateEl = elClicked.tagName === 'DIV' ? e.target : e.target.parentNode;
          if (stateEl.id === 'unchecked') {
            var checkBtn = stateEl.parentNode;
            checkBtn.removeChild(unchecked);
            checkBtn.appendChild(checked);
          } else {
            var checkBtn = stateEl.parentNode;
            checkBtn.removeChild(checked);
            checkBtn.appendChild(unchecked);
          }
        };
        return checkBtn;
      }
      function createDelBtn() {
        var delBtn = document.createElement('div');
        delBtn.style.backgroundColor = 'black';
        delBtn.style.width = '1.5rem';
        delBtn.style.height = '1.5rem';
        delBtn.style.textAlign = 'center';
        var sign = document.createElement('span');
        sign.style.color = 'darkred';
        var textNode = document.createTextNode('x');
        sign.appendChild(textNode);
        delBtn.appendChild(sign);
        delBtn.onclick = function(e) {
          var elClicked = e.target.parentNode.tagName;
          elClicked === 'LI' ? e.target.parentNode.remove() : e.target.parentNode.parentNode.remove();
        };
        return delBtn;
      }
      var checkBtn = createCheckBtn();
      var delBtn = createDelBtn();
      var btns = document.createElement('div');
      btns.style.display = 'flex';
      btns.appendChild(checkBtn);
      btns.appendChild(delBtn);
      li.appendChild(p);
      li.appendChild(btns);

      var list = document.getElementsByTagName('ul')[0];
      list.appendChild(li);
    }
    interface.appendChild(addBtn);
  }
  createTextField();
  createAddBtn();
  append(interface);
}

function createList() {
  var list = document.createElement('ul');
  append(list);
}
function createItem() {
  var item = document.createElement('li');
  var input = document.getElementsByTagName('input')[0];
  var textNode = document.createTextNode(input.value);
  var span = document.createElement('span');
  var delBtn = createDelBtn();

  span.appendChild(textNode);
  item.appendChild(span);
  item.appendChild(delBtn)
}

function createDelBtn() {
  var delBtn = document.createElement('span');
  delBtn.innerText = 'x';

  delBtn.onclick = function(e) {
    console.log('x')
  }
  return delBtn;
}

window.addEventListener('keydown', function(e) { 
  if (e.code == 'Enter') {
    createItem();
  }
});

function aggregate() {
  createListInterface();
  createList();
}
window.onload = function() {
  aggregate();
};