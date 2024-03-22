var tabuleiro, board, aviso, jogador, linha, coluna;

function iniciar(){
    tabuleiro = new Array(3);
    board = document.getElementById('board');
    aviso = document.getElementById('aviso');
    jogador = 1;

    for(let i = 0; i < 3; i++)
    tabuleiro[i] = new Array(3); //cria o 3x3 para inserção de valores

    for(let i = 0; i < 3; i++)

    for(let j = 0; j < 3; j++)
    tabuleiro[i][j] = 0; //zera o contador
    exibir();
}

function exibir(){
    HTML = '<table cellpadding="10" border="1">'; 
    for(let i = 0; i < 3; i++){   //loops para criar a tabela com as tr e td
        HTML += '<tr>';
        for(let j = 0; j < 3; j++)
    
    if(tabuleiro[i][j] == 0)
        HTML += '<td> __ </td>';
    
    else if(tabuleiro[i][j] == 1)
        HTML += '<td> X </td>' ;
    
    else 
        HTML += '<td> O </td>';
        HTML += '</tr>';
   } //dentro das funcoes as chaves das IFs nao sao obrigatorias
    HTML += '</table><br>';
    board.innerHTML = HTML;
}

function jogar(){
    aviso.innerHTML = 'Vez do jogador: ' + ((jogador)%2 + 1);
    linha = parseInt(document.getElementById('linha').value)-1;
    coluna = parseInt(document.getElementById('coluna').value)-1;

    if(tabuleiro[linha][coluna] == 0)
        if(jogador % 2)
            tabuleiro[linha][coluna] = 1;
        
        else
            tabuleiro[linha][coluna] = -1;
        
        else{
            aviso.innerHTML = 'Campo já foi marcado!'
            jogador --;
    }
    jogador++;
    exibir();
    checar();
}

function checar(){
      var soma;
      
    //   linhas
    for(let i = 0; i < 3; i++){
        soma = 0;
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

        if(soma == 3 || soma == -3)
        aviso.innerHTML = 'jogador' + ((jogador)%2 + 1) + 'ganhou! linha ' + (i + 1) + ' Preenchida';
    }

    // colunas
    for(let i = 0; i < 3; i++){
        soma = 0;
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

        if(soma == 3 || soma == -3)
        aviso.innerHTML = 'jogador' + ((jogador)%2 + 1) + 'ganhou! coluna ' + (i + 1) + ' Preenchida';
    }

    // diagonal
    soma = 0;
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    if(soma == 3 || soma == -3)
        aviso.innerHTML = 'jogador' + ((jogador)%2 + 1) + 'ganhou! Diagonal Preenchida';

    // diagonal
    soma = 0;
    soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
    if(soma == 3 || soma == -3)
        aviso.innerHTML = 'jogador' + ((jogador)%2 + 1) + 'ganhou! Diagonal Preenchida';

}