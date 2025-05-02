{
  //  constraints in typeScript

  const courseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course = "Next Level web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = courseToStudent<{
    id:number,
    name: string;
    email: string;
    devType: string;
  }>({
    id: 123,
    name: "Tanvir",
    email: "a @gmail.com",
    devType: "Next Level Developer",
  });

  const student2 = courseToStudent({
    id: 254,
    name: "Hossen",
    email: "a @gmail.com",
    hasWatch: "Apple watch",
  });

  const student3 = courseToStudent({
    id: 458,
    name: 'Hassan',
    email: 'hassan@gmail.com',
    emnai: "emnai",
  });

  //
}
