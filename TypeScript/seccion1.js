"use strict";
//
// function saludar(nombre:string){
//   console.log("Hola " + nombre.toUpperCase());
// }
//
// var wolverine = {
//     nombre : "Logan"
// };
//
// saludar(wolverine.nombre);
// ------------------  CLASE 14 TEMPLATES LITERALES ----------------------
// function getNombre(){
//   return 'Fernando';
// }
//
// let nombre:string = "Pedro";
// let apellido:string = "Perez";
// let edad:number = 32;
//
// let texto = `Hola ${ nombre } ${apellido}, tienes ${edad} años`;
//
// let texto2 = `Hola ${getNombre()}`;
//
// console.log(texto);
// console.log(texto2);
// ------------------  CLASE 15 PARAMETROS  ----------------------
// function activar( quien:string ,
//                   objeto:string = "batiseñal",
//                   momento?:string){
//
//      if(momento){
//        let mensaje:string = `${quien} activo la ${objeto} en la ${momento}`;
//        console.log(mensaje);
//      }else{
//        let mensaje:string = `${quien} activo la ${objeto}.`;
//        console.log(mensaje);
//      }
//
// }
//
// activar("Gordon");
// ------------------  CLASE 16 FUNCIONES DE FLECHA  ----------------------
// let funcion = function(a:any){
//   return a;
// }
//
// let funcionF = (a:string) => a;
//
// let funcion2 = function(a:number,b:number){
//     return a+b;
// }
//
// let funcion2F = (a:number,b:number) => a+b;
//
// let funcion3 = function(a:string){
//     a.toUpperCase();
//     return a;
// }
//
// let funcion3F = (a:string) => {
//   a.toUpperCase();
//   return a;
// }
//
// console.log(funcion3("normal"));
// console.log(funcion3F("flecha"));
// let hulk = {
//   nombre : "Hulk",
//   smash(){
//     setTimeout( function(){
//       console.log(this.nombre + 'smash!!!');
//     }, 1500);
//   }
// }
//
// let hulkF = {
//   nombre : "Hulk",
//   smash(){
//     setTimeout( () => console.log(this.nombre + '  smash!!!'),1500);
//   }
// }
//
// hulk.smash();
// hulkF.smash();
// ------------------  CLASE 17 DESTRUCTURACION DE LOS OBJETOS  ----------------------
// let avenger = {
//   nombre : "steve",
//   alias: "capitan america",
//   poder: "drogas"
// }
//
// //Con Js
// let nombre = avenger.nombre;
// let alias = avenger.alias;
// let poder = avenger.poder;
//
// console.log(nombre, alias, poder);
//
// //Con Ts
// let {nombre, alias, poder} = avenger;
// // si a alguno de los tres anteriores se pone :
// //lo que se escriba despues será un alias.
// //Ej. let {nombre:nombreAvenger, alias, poder} = avenger;
// //ahora nombre será nombreAvenger
// //console.log(nombreAvenger,alias, poder);
//
// console.log(nombre,alias, poder);
//Con Arreglos
//
// let vengadores:string[]= [ "Thor", "Steve", "Tony"];
//
// let [thor, capi, ironman] = vengadores;
// //la forma en que asigna el valor a la variable es por la posicion
// // es decir, si solo quisieramos asignar "Tony" a una variable ironman seria
// // let [ , ,ironman ] = vengadores;
//
// console.log(thor, capi, ironman);
// -----  CLASE 18 PROMESAS - FUNCIONES ASINCRONAS  --------------
// let prom1 = new Promise (function(resolve, reject){
//
//   setTimeout( () =>{
//
//     console.log('promesa terminada');
//
//     //Termina bien
//     //resolve();
//
//     //Termina normal
//     reject();
//   },1500);
// })
//
//   console.log('paso 1');
//
//   prom1.then(function(){
//     console.log('Ejecutarme si termina bien');
//   },function(){
//     console.error('Ejecutarme si termina mal');
//   });
//
//   console.log('Paso 2');
// -----  CLASE 19 INTERFACE TYPESCRIPT  --------------
// // funcion normal de forma inadecuada
//
// // function enviarMision ( xmen : {nombre:string}){
// //   console.log('Enviando a mision a: ' + xmen.nombre);
// // }
// //
// // let wolverine= {
// //   nombre: "logan",
// //   poder: "Regeneracion"
// // }
//
// //enviarMision(wolverine);
//
// // Hecho con interfaces ayuda a definir un objeto fuera del parametro
// // de la función
// interface Xmen{    // el nombre de la interface debe ir en CamelCase
//   nombre:string,    // aqui se definen que registros debe llevar y que tipo
//   poder:string      //variable
// }
//
// function enviarCuartel ( xmen : Xmen){  // al poner Xmen, va a pedir que los valores sean igua a la interfase
//   console.log('Enviando al cuartel a: ' + xmen.nombre);
// }
//
// let wolverine:Xmen = {  //al crear objeto tipo logan, marcará error si alguna propiedad
//   nombre: "Logan",      //no pertenece
//   poder: "Regeneracion"
// }
//
// enviarCuartel(wolverine);
// -----  CLASE 21  CLASES BASICAS TYPESCRIPT   --------------
// class Avenger {
//   nombre:string;
//   equipo:string;
//   nombreReal:string;
//
//   puedePelear:boolean;
//   peleasGanadas:number;
// }
//
// let antman:Avenger = new Avenger();
//
// console.log(antman);
// -----  CLASE 22  CONSTRUCTOR CLASES TYPESCRIPT   --------------
// //nos permite inicializar variables o ejecutar algun tipo de codigo antes de que nuestra
// //clase pueda ser usada en otro codigo
//
// class Avenger {
//   nombre:string = "Sin nombre"; // se define un valor por defaul
//   equipo:string = "undefined";    // se define un valor por defaul
//   nombreReal:string = "undefined";  // se define un valor por defaul
//
//   puedePelear:boolean = false;  // se define un valor por defaul
//   peleasGanadas:number = 0;     // se define un valor por defaul
//
//   constructor(nombre:string, equipo:string, nombreReal:string){
//     this.nombre = nombre; //el primer "nombre" se refiere a "sin nombre"
//                           // el segundo nombre al del parametro
//     this.equipo = equipo;
//     this.nombreReal = nombreReal;
//   }
// }
//
// let antman = new Avenger( "Antman", "cap", "Scott Lang");
//
// console.log(antman);
// -----  CLASE 23  CONSTRUCTOR CLASES TYPESCRIPT   --------------
