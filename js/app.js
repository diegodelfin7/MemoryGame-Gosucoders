	
	var array = [];
	//console.log('Array ', array);
	function crearArrayCuadrado(m){

		var arrayCuadrado =[];
		var k=j=1;

		if( m%2 == 0){
			for(var i = 0; i < m*m; i++){
				if(i%2 ==0 ){
					arrayCuadrado[i]=k;
					k++
				}else{
					arrayCuadrado[i]=j;
					j++;
				}
			}	
		} else{
			console.log('el numero es impar');
		}

		return arrayCuadrado;
	}

	function shuffle(array){

		var currentIndex = array.length, temporaryValue, randomIndex ;

			  // While there remain elements to shuffle...
		while (0 !== currentIndex) {
			    // Pick a remaining element...
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;
			    // And swap it with the current element.
			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
		}

		 return array;
	}

	function generarTabla(m,array){
		if(m%2 ==0){
			var contenedor = $("<div>");
			$("body").append(contenedor);
			var k=0;
			for(var i=0;i<m;i++){
				for(var j=0;j<m;j++){
						var logoCat = $("<div>");
						logoCat.attr({class: 'border_tabla'});
						logoCat.attr({id: i*m+j});
						logoCat.text(array[k]);
						contenedor.append(logoCat);
						k++;
				}
				contenedor.append('<br />');
			}
		}else{
			alert('error en crear tabla');
		}
	}
	
	


	array = crearArrayCuadrado(4);
	//alert('Array Inicial'+array);
	console.log('Array Inicial  : ', array);
	array = shuffle(array);
	//alert('Array Barajado'+array);
	console.log('Array Barajado :' , array);
	generarTabla(4,array);

	$("#0").on("click",function(evt){
		var data_0 = $("#0").text();

		console.log('evento click',data_0,evt);
		$("#1").on("click",function(evt){
			var data_1 = $("#1").text();
			if(data_0 == data_1){
				alert('correcto');
			}else{
				alert('incorrecto');
			}
		});


	});
