function Hello({nome, idade}) {
    let msg = "Hi World!";
    if(nome) {
        msg = "Hi "+nome;
    }

    console.log(typeof idade);

    return (
        (idade >= 18) 
            ?<h1>{msg} - Voce tem permissao</h1>
            :<h1>{msg} - Voce nao pode passar</h1>
    );
}

export default Hello;