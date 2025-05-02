{
  // Spread & reast operator and Destructuring

  // Learn Spread operator

  // Array spread operator

  const friends1: string[] = ["Rayhan", "Shahadat", "Mahin"];
  const friends2: string[] = ["Pial", "Nadam", "Noman"];

  friends1.push(...friends2);

  // Object Spread operator

  const mentors1 = {
    typeScript: "Mezba",
    reduz: "mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Nahid",
    next: "Tonmoy",
    cloud: "Firoz",
  };

  const mentorsList = {
    ...mentors1,
    mentors2,
  };

  /// Learn Reast operator

  const greetTeachers = (...teachers: string[]) => {
    // console.log(`Hi ${teacher1} ${teacher2} ${teacher3}`);
    teachers.forEach((teacher: string) => console.log(`${teacher}`));
  };

  greetTeachers("Rumi", "Rakibul", "Rafi", "orebaba");


  const forntendDeveloper: string[] = ['HTML', 'CSS', 'JavaScript', 'React'];

  const backendDeveloper : string [] = ['Node js', 'express js', 'Mongo bd'];

  const fullStackDeveloper : string[] = [...forntendDeveloper, ...backendDeveloper]

  console.log(fullStackDeveloper)



}
