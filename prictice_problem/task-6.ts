{
  //Task : Intersection Types

  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  function describeUser(user: AdminUser) {
    return `${user.name} (${user.email}) is an Admin with level ${user.adminLevel}.`;
  }

  const admin1: AdminUser = {
    name: "Tanvir",
    email: "tanvir@example.com",
    adminLevel: 3,
  };

  console.log(describeUser(admin1));
}
