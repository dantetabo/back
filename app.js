class Usuario {
    constructor (name, lastname){
        this.nombre = name;
        this.apellido = lastname;
        this.libros = [];
        this.mascotas = [];
    };

    getFullName(){
       return (`tu nombre es ${this.nombre} y tu apellido es ${this.lastname}`)
    };


    addMascota (mascotas){
        this.mascotas.push(mascotas);

    };

    countMascotas(){
        return (this.mascotas.length);
    }

    addBook (titulo, autor){
        this.libros.push ({titulo, autor})
        
    };

    getBookNames() {
      return this.libros.map (object => {
          return (object.autor)
      });
        
    };
};


//usuarios
const persona1 = new Usuario ("dante", "tabó")
const persona2 = new Usuario ("Miguel", "Angel")

//mascotas
persona1.addMascota ("fifu");
persona1.addMascota ("pancho");

persona2.addMascota ("draco");
persona2.addMascota ("can");

//libros
persona1.addBook ("Meditaciones" , "Marco Aurelio")
persona1.addBook ("El Arte de la Guerra" , "Tzu Sun")

persona2.addBook ("El Alquimista" , "Paulo Coelho")
persona2.addBook ("El Principito" , "Antoine de Saint-Exupéry")


//consols
console.log(persona1.countMascotas())
console.log(persona1.getBookNames())