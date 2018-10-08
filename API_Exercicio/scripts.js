//Cria uma variavel de request e atribui um novo XMLHttpRequest objeto para ela
var request = new XMLHttpRequest();

//Abre uma nova conexao, usando um GET request no endpoint da URL
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function (){

	//Começa a acessar o JSON data aqui
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach(movie => {
			console.log(movie.title);
		});
	} else {
		console.log('error');
		console.log(request.status);
	}
}


//Manda o request
request.send();