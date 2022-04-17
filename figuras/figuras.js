
//codigo cuadrado

console.group("Cuadrados: ");

// const ladoCuadrado = 5;
// console.log("Lados miden: "+ladoCuadrado+ " cm");

function perimetroCuadrado(lado)
{
    return lado*4;
} 

perimetroCuadrado();

//console.log("Perimetro es: "+perimetroCuadrado+ " cm");

function areaCuadrada(lado)
{
    return lado * lado; 
} 

areaCuadrada();

//console.log("Area es: "+areaCuadrada+ " cm2");

console.groupEnd();



// codigo triangulo

console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Miden : "
// +ladoTriangulo1
// +" cm, "
// +"el otro lado mide: "
// +ladoTriangulo2
// +" cm, "
// +" Y la base mide: "+baseTriangulo
// +" cm"

// );

// const alturaTriangulo = 5.5;
// console.log("Altura es: "+alturaTriangulo+ " cm");

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base; 
} 

// console.log("Triangulo es: "+perimetroTriangulo+ " cm");

function areaTriangulo(base, altura)
{
    return (base*altura)/2;
}

// console.log("Area es: "+areaTriangulo+" cm2");

console.groupEnd();



//codigo circulo

console.group("Circulo");

// const radioCirculo = 4; 
// console.log("Radio es : "+radioCirculo+ " cm");

function diametroCirculo(radio)
{
    return radio*2;
} 
// console.log("Diamétro es : "+diametroCirculo+ " cm");

const PI = Math.PI;

// console.log("PI es : "+PI);


function perimetroCirculo(radio)
{   
    const diametro = diametroCirculo(radio);
    return diametro*PI; 
} 

// console.log("Perimetro es : "+perimetroCirculo+ " cm");

function areaCirculo(radio)
{
    return (radio*radio)*PI;
}

// console.log("Area es : "+areaCirculo+ " cm**2");

console.groupEnd();




// Aquí iniciamos con la parte de HTML

//Square
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    
}


function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value; 

    const area = areaCuadrada(value);
    alert(area);
} 

//Triange

function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;
    ladito1 = parseInt(value1);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;
    ladito2 = parseInt(value2);

    const input3 = document.getElementById("inputBaseTriangulo");
    const value3 = input3.value;
    ladito3 = parseInt(value3);

    const perimetro = perimetroTriangulo(ladito1, ladito2, ladito3);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const input1 = document.getElementById("inputBaseTriangulo");
    const value1 = input1.value; 
    ladito1 = parseInt(value1);

    const input2 = document.getElementById("inputAlturaTriangulo");
    const value2 = input2.value; 
    ladito2 = parseInt(value2);

    const area = areaTriangulo(ladito1, ladito2);
    alert(area);
} 

//Circle

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    ladito = parseInt(value);

    const perimetro = perimetroCirculo(ladito);
    alert(perimetro);
}


function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = input.value; 
    ladito = parseInt(value);

    const area = areaCirculo(ladito);
    alert(area);
}