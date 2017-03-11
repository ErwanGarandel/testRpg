/**
 * Created by Erwan on 08/03/2017.
 */
// var ts = new Tileset("basique.png");// déclarer notre variable ici permettra de charger l'image avant le chargement de la page.
var map = new Map("premiere");

window.onload = function (){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d'); // permet de récupérer l'objet "context" (nomComplet : CanvasRenderingContext2D
/*
    ctx.fillStyle = 'blue'; //Remplir la forme
    ctx.fillRect(10,10,100,50);

    ctx.strokeStyle = 'red'; //Contourner la forme
    ctx.strokeRect(70,70,70,70);
*/
    // tests
/*
    ts.dessinerTile(1, ctx, 10, 10);
    ts.dessinerTile(5, ctx, 50, 10);
    ts.dessinerTile(6, ctx, 90, 10);
    ts.dessinerTile(7, ctx, 130, 10);
*/

    canvas.width = map.getLargeur() * 32;
    canvas.heigth = map.getHauteur() * 32;

    map.dessinerMap(ctx);
};
