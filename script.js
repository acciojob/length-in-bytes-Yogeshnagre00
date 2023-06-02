const byteSize = (str) => {
  // write your code her
	const encoder = new TextEncoder();
  const encodedStr = encoder.encode(str);
  
  // Return the length of the encoded string in bytes
  return encodedStr.length;
	
};


// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));