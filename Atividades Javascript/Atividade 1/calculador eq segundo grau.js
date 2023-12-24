//calculador de equação do segundo grau simples
//Para calcular uma equação do segundo grau é nessessário atribuir certos valores:
let a;//O valor A, que na equação é acompanhado de um X²;
let b;//O valor B, que é acompanhado de um X;
let c;//O valod C, que não tem acompanhante na equação;
let delta;//O delta (△) que é o resultado do calculo b²-4*a*c;
let x1;//O primeiro resultado;
let x2;//E o segundo resultado;

primeiraConta();
segundaConta();
terceiraConta();


function primeiraConta(){
    console.log("Primeira-Conta-------------------");
    console.log("2x² + 2x - 12 = 0");//Primeiro é extraido os valores A, B e C da equação.
    a = 2;
    b = 2;
    c = -12;
    console.log("a = "+a);
    console.log("b = "+b);
    console.log("c = "+c);
    console.log("△ = "+b+"² - 4*"+a+"*"+c);
    delta = (b*b)-4*a*c; //Depois calculamos o delta.
    console.log("△ = "+ delta);
    //E então é calculado o valor do X, que são duas possibilidades:
    x1 = (-b + Math.sqrt(delta))/(2*a);//O x1 (-b + √△)/(2*a);
    x2 = (-b - Math.sqrt(delta))/(2*a);//E o x2 (-b - √△)/(2*a).
    console.log("x1 = "+x1);
    console.log("x2 = "+x2);
}

function segundaConta(){
    console.log("Segunda-Conta-------------------");
    console.log("2x² - x - 1 = 0");
    a = 2;
    b = -1;
    c = -1;
    console.log("a = "+a);
    console.log("b = "+b);
    console.log("c = "+c);
    console.log("△ = "+b+"² - 4*"+a+"*"+c);
    delta = (b*b)-4*a*c;
    console.log("△ = "+ delta);
    x1 = (-b + Math.sqrt(delta))/(2*a);
    x2 = (-b - Math.sqrt(delta))/(2*a);
    console.log("x1 = "+x1);
    console.log("x2 = "+x2);
}

function terceiraConta(){
    console.log("Terceira-Conta-------------------");
    console.log("-x² + 7x - 12 = 0");
    a = -1;
    b = 7;
    c = -12;
    console.log("a = "+a);
    console.log("b = "+b);
    console.log("c = "+c);
    console.log("△ = "+b+"² - 4*"+a+"*"+c);
    delta = (b*b)-4*a*c;
    console.log("△ = "+ delta);
    x1 = (-b + Math.sqrt(delta))/(2*a);
    x2 = (-b - Math.sqrt(delta))/(2*a);
    console.log("x1 = "+x1);
    console.log("x2 = "+x2);
}
//codigo debugado e executado usando o Node.Js