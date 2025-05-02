{
  // promis
  type Todo = {
    id: number,
    userId: number,
    title : string,
    completed: boolean


  }
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
    console.log(data)
  };

  getTodo()

  type Something = {
    something: string;
  };
  const createPromis = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("Fail to Load data");
      }
    });
  };

  //   Calling create promise function

  const showData = async () => {
    const data: Something = await createPromis();
    return data;
    // console.log(data)
  };

  showData();

  //
}
