//Estrai a chave de objeto e ultiliza como tipagem
const icons = {
    "home": "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg"
}

type Inon = typeof icons

//Agora icon tera o tipagem do icons
const icon: keyof Inon = "home"//aqui ele extrail uma chave para tipagem