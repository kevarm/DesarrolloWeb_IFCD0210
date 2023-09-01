export class alumnosBD{

    constructor(
        public nombreA: String,
        public apellidoA: String,
        public edadA: number,
        public correoA: String,
        public telefonoA: String,
        public fotoA: String,
        public estadoA: boolean
    ){}

    // public nombreA: string
    // public apellidosA: string
    // public edadA: number
    // public correoA: string
    // public estadoA: boolean
    // public notaA: number

    // constructor(){
    //     this.nombreA =''
    //     this.apellidosA =""
    //     this.edadA = 0
    //     this.correoA =""
    //     this.estadoA = true
    //     this.notaA = 0

    // }
}
export class alumnoBD{

    constructor(
        public nombreB: String,
        public apellidoB: String,
        public edadB: number,
        public correoB: string,
        public telefonoB: number,
        public fotoB: string,
        public cursoB: string
    ){}
}
