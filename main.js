
function display(e){
	let cval = $("#input").val();
	$("#input").val(`${cval}${e.value}`)
}

function reset(){
	$("#input").val('')
}

function equate(e){
	let cval = $("#input").val()
	console.log(cval)
	$("#input").val(eval(cval))
	console.log(eval(cval))
}