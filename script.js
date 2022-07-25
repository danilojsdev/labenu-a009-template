const nome = prompt("Qual o seu nome?");
const cor = prompt("Qual a sua cor favorita?");

const fraseCorFavorita = "A cor favorita do "+nome+" é "+cor+".";

console.log(fraseCorFavorita);
console.log("A cor favorita do "+nome+" é "+cor+".");

const fraseTemplateString = `A cor favorita do ${nome} é ${cor}.`;

console.log(fraseTemplateString);

//-----------------------

const citacao = prompt("Escreva uma citação.");
const fraseComCitacao = "A cor favorita do "+nome+" é "+cor+" \"" + citacao + "\"";

console.log(fraseComCitacao);

console.log(`Nome: ${nome}. \nCor Favorita: ${cor}.`);

//--------------------

console.log(`Nome: ${nome.toUpperCase()} \nCor Favorita: ${cor}.`);

console.log(nome.length);

const possuiA = nome.includes("a");
console.log(possuiA);

// Exercício de fixação:

const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu e-mail?");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}.`);

console.log(`O nome do usuário tem ${nomeDoUsuario.length} caracteres.`);

console.log(emailDoUsuario.includes("@"));

let fraseAlterada = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}.`;
console.log(fraseAlterada.replaceAll("r", "l"));