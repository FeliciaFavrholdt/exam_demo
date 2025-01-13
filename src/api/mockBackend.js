const usersDB = [
    { username: "testuser", password: "password123", role: "user" }
  ];
  
  const generateToken = (username, role) => {
    const payload = {
      username,
      role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 // Token valid for 1 hour
    };
    return btoa(JSON.stringify(payload)); // Simple base64 encoding
  };
  
  export const mockLogin = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      const user = usersDB.find((u) => u.username === username && u.password === password);
      setTimeout(() => {
        if (user) {
          console.log("[Mock Backend] Login successful for:", username);
          resolve({ token: generateToken(user.username, user.role), role: user.role });
        } else {
          console.error("[Mock Backend] Invalid credentials for:", username);
          reject({ message: "Invalid username or password." });
        }
      }, 1000);
    });
  };
  
  export const mockRegister = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      const userExists = usersDB.find((u) => u.username === username);
      setTimeout(() => {
        if (userExists) {
          console.error("[Mock Backend] User already exists:", username);
          reject({ message: "User already exists." });
        } else {
          usersDB.push({ username, password, role: "user" });
          console.log("[Mock Backend] Registered new user:", username);
          resolve({ token: generateToken(username, "user"), role: "user" });
        }
      }, 1000);
    });
  };