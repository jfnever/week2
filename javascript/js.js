/**
 * Created by apple on 16/1/28.
 */
var static_word1 = "We need a new spirit of ";
var static_word2 = " ,a sense that we are ";
var static_word3 = " ,or the ";
var static_word4 = " will continue to wither. Our ";
var static_word5 = " is bound up with the destiny of ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
    evt.preventDefault(evt);

    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;
    console.log(static_word1 + element1 + static_word2 + element2 + static_word3 + element3 + static_word4 + element4 + static_word5 + element5);


}