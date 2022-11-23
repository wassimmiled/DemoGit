// /**1 */

// (function () {
//   var aName = "wassim";
//   console.log(aName)
// })();
// // Le nom de la variable n'est pas accessible depuis le périmètre externe
// console.log(aName)  *///lancement "Exception ReferenceError: aName n'est pas défini"*/
/**2 
var result = (function () {
  var name = "Wassim";
  return name;
})();
// Crée immédiatement la sortie:
console.log(result); // "Wassim"
console.log(result); */