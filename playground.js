// 🎨 VS Code Setup Playground
// Use this file to test your new font (Monaspace), ligatures, and theme colors.

// 1. Ligatures & Symbols
//    !=  !==  ==  ===  =>  ->  <-  <=  >=  ++  --  ...
//    www  []  {}  ()  &&  ||  !!  ?:  #  @  $  %  ^  &  *

// 2. Typography Check
//    The quick brown fox jumps over the lazy dog.
//    0123456789  Il1O0  (Distinguishable characters)

// 3. Code Highlighting (Catppuccin Mocha)

/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate.
 * @returns {number} The factorial result.
 */
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role || 'guest';
  }

  isAdmin() {
    return this.role === 'admin';
  }
}

// TODO: Implement user fetching
const fetchUser = async (id) => {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const data = await response.json();
    return new User(data.name, data.role);
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// 4. Texture Healing (Monaspace Feature)
//    Try typing "mmmmmm" and "iiiiii" to see how they space out evenly.
//    mmmmmm
//    iiiiii
