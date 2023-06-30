// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    
    const ret = {
        largura: 5,
        altura: 8,
    };
     
    const perimetro = 2 * (ret.largura + ret.altura);

    const area = ret.largura * ret.altura;

    return {
        perimetro : perimetro,
        area : area
    };
     console.log(calcularRetangulo);
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    const pessoa1 = { 
        nome: 'John',
        idade: 25,
        cidade: 'New York',
    };

    if (pessoa1.idade >= 18) {
        return true;
      } else {
        return false;
     }
}



// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
   return `${obj.nome} ${obj.idade} ${obj.cidade}`;
   
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
