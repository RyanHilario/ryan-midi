function tocaSom (seletorAudio) {
	// document.querySelector(seletorAudio).currentTime = 0;
	// document.querySelector(seletorAudio).play();
	const elemento = document.querySelector(seletorAudio);

	if (elemento === null) {
		console.log('Elemento não encontrado');
	} 

	if (elemento != null) {
		console.log(elemento)

		// elemento.currentTime = 0;
		// elemento.play();
	}

}


const listaTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaTeclas.length; i++) {
	const teclas = listaTeclas[i]
	const instrumento = teclas.classList[1];
	const idAudioTecla = `#som_tecla_${instrumento}` // template string


	teclas.onclick = (event) => {
		tocaSom(idAudioTecla);
		console.log(instrumento);
	};

	teclas.onkeydown = (event) => {
		if (event.code === 'Space' || event.code === 'Enter') {
			teclas.classList.add('ativa');
		} 
	}

	teclas.onkeyup = (event) => {
		teclas.classList.remove('ativa');
	}


	document.onkeypress = (event) => {
		if (event.key < 10 && event.key > 0) {
			tocaSom(`#som_tecla_${listaTeclas[event.key - 1].classList[1]}`)
		}
	}

}



// ATESTESTESTES
axios.get("https://api.chucknorris.io/jokes/random");


// axios
// .get("https://api.github.com/users/iuricode")
// .then(function (response) {
// 	console.log(response.data);
// 	// console.log(response.data.login);
// })
// .catch(function (error) {
// 	console.log(error);
// });


fetch("https://api.github.com/users/iuricode")
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));

// axios
// .get("https://api.chucknorris.io/jokes/random")
// .then(function (response) {
// 	console.log(response.data);
// 	console.log(response.data.value);
// })
// .catch(function (error) {
// 	console.log(error);
// });