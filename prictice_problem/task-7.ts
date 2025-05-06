{
  // optional chaining
  type Employee = {
    name: string;
    address?: {
      city?: string;
      country?: string;
    };
  };


  function getEmployeeCity(employee: Employee): string {
    return employee.address?.city ?? "City not available";
  }

  const employee1: Employee = {
    name: "Tanvir",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  };
  
  const employee2: Employee = {
    name: "Hossen"
  };
  
  console.log(getEmployeeCity(employee1)); // Output: Dhaka
  console.log(getEmployeeCity(employee2)); // Output: City not available
  
}
