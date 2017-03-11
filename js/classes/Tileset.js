/**
 * Created by Erwan on 08/03/2017.
 */
function Tileset(url){
    // Chargement de l'image dans l'attribut image
    this.image = new Image();
    this.image.referenceDuTileset = this;
    this.image.onload = function() {
        if(!this.complete) {
            throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
        }
        // Largeur du tileset en tiles

        this.referenceDuTileset.largeur = this.width / 32;
    };
        this.image.src = "tilesets/" + url;
    }

    // Méthode de dessin du titre numéro "numéro" dans le contexte 2d aux coordonnées x et y
    Tileset.prototype.dessinerTile = function (numero, context, xDestination, yDestination) {
        /**
         * On prend le reste de la division entière du numéro du tile
         * par la largeur (en tiles) du tileset.
         * On obtient alors le numéro de la colonne où est situé le
         * tile. Par contre si on obtient 0, c'est qu'on est sur
         * un tile tout à droite du tileset.
         */
        var xSourcesEnTiles = numero % this.largeur;
        if(xSourcesEnTiles == 0)
            xSourcesEnTiles = this.largeur;

        /**
         * Ici on divise le numéro demandé par la largeur en tiles.
         * Si nous obtenons un nombre entier, pas de problème.
         * Dans le cas contraire c'est que nous ne sommes plus sur la
         * ligne indiquée par la partie entière, mais sur la ligne
         * suivante. */
        var ySourcesEnTiles = Math.ceil(numero / this.largeur);


        /**
         * Enlever moins 1 est très important.
         * le tile numero 1 commence en (0,0), et pas en (32, 32)
         */
        var xSource = (xSourcesEnTiles - 1) * 32;
        var ySource = (ySourcesEnTiles - 1) * 32;

        context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32,32);
    };
