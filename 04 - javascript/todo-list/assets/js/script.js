var numCheckBox = 0;

var lista = document.getElementById("list");
function addTarefa() {
    // cria o elemento check box
    var checkbox = document.createElement("INPUT");
    // cria um Label para o check box
    var newlabel = document.createElement("Label");
    // cria a div que vai conter o label + o checkbox
    var newDiv = document.createElement("div");
    
    newDiv.setAttribute("class", "checkbox-div");

    // da ao checkbox um id especifico
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox" + numCheckBox);
    checkbox.setAttribute("onchange","getChecked(id)");
    
    
    // da ao label o valor da caixa de texto 
    newlabel.setAttribute("for","checkbox" + numCheckBox);
    newlabel.setAttribute("id", "checkbox" + numCheckBox+"-label");
    newlabel.innerHTML = document.getElementById("input-text").value;
    
    //adiciona ao arquivo DOM
    newDiv.appendChild(checkbox);
    newDiv.appendChild(newlabel);
    lista.appendChild(newDiv);
    //incrementa  numero de checkboxes
    numCheckBox++
    
}

function getChecked(checkbox_id) {

    var checkbox = document.getElementById(checkbox_id);
    var checkboxLabel = document.getElementById(checkbox_id+"-label");
    

    if (checkbox.checked) {
        checkboxLabel.style.textDecoration = "line-through"; 
        checkboxLabel.style.color = "grey"
             
    }
    else{
        checkboxLabel.style.textDecoration = "none";
        checkboxLabel.style.color = "black"
    }
    
    
}








