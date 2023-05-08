// Resolva o Exercício de Fixação!
const idade = (nome, anoNasc, anoAtual) => {
return anoAtual-anoNasc>=18

}
do{
let nome = prompt(`Diga seu nome:`);
let anoNasc= Number(prompt(`Fale o ano que nasceu:`));
let anoAtual=Number(prompt(`Fale o ano atual:`));
console.log(`O ${nome} é maior de idade? ${idade(nome,anoNasc,anoAtual)}`);
let sair =confirm(`Gostaria de sair?`);
if (sair){
    break
}
 }while(true)
