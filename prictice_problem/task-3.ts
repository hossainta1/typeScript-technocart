{
  //Task 4: Union and Intersection Types
  interface Book {
    title: string;
    author: string;
    pages: number;
  }

  interface Magazine {
    title: string;
    issueNumber: number;
    publisher: string;
  }


  type BookOrMagazine = Book | Magazine;

  type BookAndMagazine = Book & Magazine;


  const printPublication = (item: BookOrMagazine) => {
    console.log(`Title: ${item.title}`);
  };
  
  const book: Book = {
    title: "TypeScript Deep Dive",
    author: "Basarat Ali",
    pages: 350,
  };
  
  const magazine: Magazine = {
    title: "Tech Monthly",
    issueNumber: 42,
    publisher: "TechPress",
  };
  
  printPublication(book);
  printPublication(magazine);
  











}
