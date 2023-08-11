

    public color: String;
    public marca: String;
    public talla: String;
    public precio: Number;

    //Método (hay que repetirlo por cada propiedad del objeto (lo de arriba))
    public AñadirColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

var camiseta = new Ropa();
camiseta.setColor("Rojo");