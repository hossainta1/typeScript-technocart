{
    function user(name: string, age: number, role?: 'admin' | 'user' | 'guest' ): void{

        console.log(`The name of the user${name}`)
        console.log(`The name of the user${age}`)
        if(role){
            console.log(`Role: ${role}`);
            
        }else{
            console.log(`The role is no provide`)
        }

    }

    const user1 = user('tanir', 20, 'admin');

    console.log(user1)
}