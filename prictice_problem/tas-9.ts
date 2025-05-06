{
  function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const user = {
    name: "Tanvir",
    age: 25,
    role: "Developer",
  };

  console.log(getPropertyValue(user, "name")); // Output: Tanvir
  console.log(getPropertyValue(user, "age")); // Output: 25
}
