//colocando alert ao ir para o index
function irAoIndex()
{
    alert('Seja bem vindo')
}

//colocando alert ao ir para o quiz
function irAoQuiz()
{
    alert('Vamos conhecer sobre vinho')
}

//fazendo o quiz
let acertos = 0;
function quiz()
{
    //pergunta1

    resposta1 = prompt("Primeira pergunta: Vinho branco é feito de uvas brancas ?(sim/não)")
    if(resposta1 == "sim")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "não")
    {
        alert("Você errou")
    }
    else
    {
        alert("Resposta inválida")
    }

    //pergunta2

    resposta1 = prompt("Segunda pergunta: Vinho branco é feito de uvas brancas ?(sim/não)")
    if(resposta1 == "sim")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "não")
    {
        alert("Você errou")
        alert("Na verdade, não é uma questão de solo bom ou ruim. A vinha gosta de solos não tão férteis, mais arenosos, com bastante pedras, que, talvez para outro tipo de plantação, seria considerado um ruim. Quanto maior a dificuldade da uva para produzir a fruta, melhor vai será o processo, porque é onde vai ter a semente para perpetuar a espécie. Se houver dificuldade para se desenvolver, terá mais açúcar para depois germinar. Isso chega aumentar até 4g de açúcar que depois vai resultar na quantidade e na qualidade do álcool da bebida.")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta3

    resposta1 = prompt("Terceira pergunta:Vinho tinto é ideal para o inverno e branco para o verão(sim/não)")
    if(resposta1 == "não")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "sim")
    {
        alert("Você errou")
        alert("Uma frase bem usual, mas nada verídica. Os vinhos tintos possuem uma grande quantidade de antocianas e taninos, polifenóis que estimulam a circulação e o aquecimento do corpo. Mas também existem tintos leves, menos encorpados e que podem ser, inclusive, resfriados a uma temperatura de 14 graus para serem consumidos em dias de calor. Já os brancos, por serem servidos gelados e terem acidez presente, o que gera frescor, acabam sendo relacionados ao verão. Não está errado, mas existem rótulos brancos estruturados, com passagem por madeira, que comportam uma temperatura de serviço mais elevada, sendo boa opção para quem não abre mão da bebida no inverno ou para harmonizar com queijos.")
    }
    else
    {
        alert("Resposta inválida")
    }

    //pergunta4

    resposta1 = prompt("Quarta pergunta: Como armazenar vinhos corretamente?(deitado/em pé)")
    if(resposta1 == "deitado")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "em pé")
    {
        alert("Você errou")
        alert("Se trabalha com as garrafas deitadas ou levemente inclinadas para baixo, para que a rolha fique em contato com o vinho. Essa é a premissa para quando se trabalha com rolha de cortiça, porque é um material poroso. Quando não tem contato com o líquido, ela vai murchar e permitir entrada de oxigênio dentro da garrafa, deteriorando o produto. Essa dica vale tanto para vinhos quanto para espumantes.")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta5

    resposta1 = prompt("Quinta pergunta: Vinho feito de várias uvas não é bom. Os melhores são os de uma única uva.(sim/não)")
    if(resposta1 == "não")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "sim")
    {
        alert("Você errou")
        alert("Isso é um mito. Vale ressaltar que os primeiros vinhos que surgiram na história foram feitos com cortes, a combinação de diferentes variedades. Os chamados varietais, os feitos com apenas uma uva, nasceram com a chegada do Novo Mundo, fase que marca uma nova era de produção da bebida, na década de 1970. A combinação de variedades aumenta a complexidade do produto e pode deixar a bebida ainda mais saborosa. Além de ser um desafio legal aos enólogos, que marcam o seu trabalho em deliciosas combinações.")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta6

    resposta1 = prompt("Sexta pergunta: Vinho bom é vinho caro ?(sim/não)")
    if(resposta1 == "não")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "sim")
    {
        alert("Você errou")
        alert("Apesar de alguns rótulos carregarem o peso de vinícolas reconhecidas e, por isso, serem mais caros, existem vinhos com ótimas propostas de bom custo-benefício. Nossa dica é apostar em bebidas jovens, frutadas e para consumo rápido.")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta7

    resposta1 = prompt("Sétima pergunta: Frutos do mar combinam com vinho branco ?(sim/não)")
    if(resposta1 == "sim")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "não")
    {
        alert("Você errou")
        alert("Geralmente optamos por branco, pois frutos do mar têm sabor delicado e, geralmente, apresentam um toque cítrico no preparo - características que os vinhos jovens também têm. É preciso ter cuidado se a escolha for servir com vinhos tintos. As versões encorpadas podem deixar um sabor metálico em boca bem desagradável. Caso o prato seja preparado de forma mais elaborada, com molho de natas, por exemplo, ou empanado, é possível combiná-lo com um vinho tinto. É tudo uma questão de gosto.")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta8

    resposta1 = prompt("Oitava pergunta: Vinho verde pode ser rosé ou branco?(sim/não)")
    if(resposta1 == "sim")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "não")
    {
        alert("Você errou")
        alert("O vinho verde, na verdade, pode ser branco, rosé ou tinto. Esse estilo da bebida faz menção a acidez, já que é produzida em uma região de Portugal onde não tem muita amplitude térmica, por isso, a uva não consegue maturar. A questão da cor acabou sendo trabalhada para trazer a sensação de frescor que temos ao degustar o vinho, mas isso não quer dizer que ele tenha a tonalidade.")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta9

    resposta1 = prompt("Nona pergunta: Quando tem aroma de frutas é porque o vinho leva frutas ?(sim/não)")
    if(resposta1 == "não")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "sim")
    {
        alert("Você errou")
        alert("Uma das principais características de um vinho são os aromas varietais, que vêm a partir das variedades das uvas. Por exemplo, chardonnay tem aromas de abacaxi e de maçã verde enquanto cabernet sauvignon tem de amora, ameixa e cassis. Mas atenção: as frutas que dão os aromas não estão na composição da bebida, ok?")
    }
    else
    {
        alert("Resposta inválida")
    }
    
    //pergunta10

    resposta1 = prompt("Décima pergunta: Quanto mais álcool, melhor o vinho ?(sim/não)")
    if(resposta1 == "não")
    {
        alert("Você acertou")
        acertos++

    }
    else if(resposta1 == "sim")
    {
        alert("Você errou")
        alert("O álcool é um produto natural do processo de fermentação dos vinhos, que transforma o açúcar presente na uva em etanol. O que não nos damos por conta é que nas safras em que a uva não atinge a maturação completa, é permitido a adição de açúcar para elevar o teor alcoólico. Muitas vezes, esse exagero pode desequilibrar o vinho, deixando-o mais alcoólico do que a estrutura permite.")
    }
    else
    {
        alert("Resposta inválida")
    }
    alert("Você acertou " + acertos)
}

//verificando os dados do form
let nome = document.getElementById('Nome')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')
let valido = 0
//verificando a presença de número
function validar()
{
    //verificando nome
    if((nome.indexOf('1') > -1)
    || (nome.indexOf('2') > -1)
    || (nome.indexOf('3') > -1)
    || (nome.indexOf('4') > -1)
    || (nome.indexOf('5') > -1) 
    || (nome.indexOf('6') > -1)
    || (nome.indexOf('7') > -1) 
    || (nome.indexOf('8') > -1) 
    || (nome.indexOf('9') > -1) 
    || (nome.indexOf('10') > -1))
    {
        document.getElementById("msgnome").innerHTML="<font color='red'>Nome inválido </font>";
        valido--;
    }
    //verificando email
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="E-mail válido";
    alert("E-mail valido");
    }
    else{
    valido--;
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }
}

if(valido < 0)
{
    alert('Dado/Dados inválidos');
    valido = 0;
}