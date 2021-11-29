let trafficLight = "amarelo";

switch (trafficLight) {
    case "vermelho":
        console.log("pare");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "verde":
        console.log("siga");
        break; 

    default:
        console.log("valor não identificado")
}

let situação = "aprovada";

switch (situação) {
    case "aprovada":
        console.log("aprovada");
        break;

    case "lista de espera":
        console.log("lista de espera");
        break;

    case "reprovada":
        console.log("reprovada");
        break; 

    default:
        console.log("não se aplica")
}