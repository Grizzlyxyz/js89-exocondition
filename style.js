// Exo 8
   // Refaire l'exercice 5 mais avec un switch au lieu d'un if - else
   let calculetteSwitch = (a, b, c) => {
     let resultat;
     switch (b) {
       case '+':
         resultat = a + c;
         break;
       case '-':
         resultat = a - c;
         break;
       case '/':
         resultat = a / c;
         break;
       case '*':
         resultat = a * c;
         break;
       default:
         resultat = " N'est pas une valeur correct"
         break;
     }
     return resultat;
   }
b
// Exo 9
 
      // Créer une function contenant un switch qui vérifie sur un nombre est divisible par 2
      // Qui répond "Le nom x est divisible par 2 x:2 = z"
     // Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2

