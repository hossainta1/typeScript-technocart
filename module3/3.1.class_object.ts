{
    // oop-class
    
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

  //perameter property {here publich is the perameter prooerty and we can remove duplice type for using perameter proprty}
        constructor (public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species= species;
            // this.sound = sound
        }

        makeSound(){
            console.log(`The ${this.name} sound ${this.sound}`)
        }
    }

    const dog = new Animal("German Shepard", "dog", "Gew Gew")
    const cat = new Animal("Parsian", "Cat", "Mew Mew");
    cat.makeSound()

    


    // 
}