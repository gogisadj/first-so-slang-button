$(document).ready(function(){
	$('#work').click(function(){
		var numba = Math.floor(Math.random()*7);
		switch(numba){
			case 0:
				alert("sup");
				break;
			case 1:
				alert("beast");
				break;
			case 2:
				alert("swaggy");
				break;
			case 3:
				alert("yo");
				break;
			case 4:
				alert("dawg");
				break;
			case 5:
				alert("radical");
				break;
			case 6:
				alert("bro");
				break;
		}
	});
});
