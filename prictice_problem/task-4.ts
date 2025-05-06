{
  //Task 5: Function Type

  function reverseString(text: string) {
    return text.split(" ").reverse().join("");
  }

  const result = reverseString("hello");
  console.log(result); // Output: "olleh"
}
