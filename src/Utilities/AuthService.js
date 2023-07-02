// AuthService.js

class AuthService {
    login(username, password) {
      // Perform API call or any other logic to authenticate the user
      // and obtain a token from the server
      // Return the token or false if authentication fails
      console.log("Login");
    }
  
    logout() {
      // Clear the token from local storage or perform any other necessary cleanup
      console.log("Logout");
    }
  
    isAuthenticated() {
      // Check if the token exists in local storage
      // Return true if the token exists; otherwise, return false
      console.log("checking authernicated");
    }
  }
  
  export default new AuthService();
  