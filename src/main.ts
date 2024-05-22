
// importo la interfaz creada
import Group from "./interface/groups";
import "./style.css";

console.log("Hello Typescript!");

// creo un funcion que devuelva un grupo
function createGroup(name: string, year: number, activo: boolean, genero: string): Group {
  return { name, year, activo, genero };
}


// llamo a la funcion pasando parametros
let beatles = createGroup("The Beatles", 1960, true, "🎵 Pop Rock");
let queen = createGroup("Queen", 1970, false, "Rock");
let acdc = createGroup("AC DC", 1973, true, "🤘 Hard Rock");
let beethoven = createGroup("Ludwig van Beethoven", 1770, false, "🎼 Clásica");
let rollingstones = createGroup("The Rolling Stones", 1962, true, "🎸 Rock");

// saco grupo por consola
console.log("El grupo",beatles.name ,"/", beatles.year,"Activo:",beatles.activo ,"/", beatles.genero);
console.log(queen.name ,"/", queen.year,"Activo:",queen.activo,"/",queen.genero);
console.log(acdc.name ,"/", acdc.year,"Activo:",acdc.activo,"/", acdc.genero);
console.log(beethoven.name ,"/", beethoven.year,"Activo:",beethoven.activo ,"/", beethoven.genero);
console.log(rollingstones.name ,"/", rollingstones.year,"Activo:",rollingstones.activo ,"/", rollingstones.genero);
