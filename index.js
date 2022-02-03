const escrever = ()=>{

    alert('apenas numeros')

    const arg = prompt('digite um numero')

    for(let i=1; i <= arg; i++){
        document.getElementById('resposta').innerHTML += i + " ";

    }

        
   

}