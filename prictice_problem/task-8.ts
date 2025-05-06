{
    // nalish coaliching
    function getDisplayName(name: string | null | undefined): string {
        return name ?? "Anonymous";
      }

      console.log(getDisplayName("Tanvir"));  // Output: Tanvir
console.log(getDisplayName(null));      // Output: Anonymous
console.log(getDisplayName(undefined)); // Output: Anonymous
console.log(getDisplayName(""));        // Output: (Empty String)

}