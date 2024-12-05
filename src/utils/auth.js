export const isTokenExpired = (token) => {
  if (!token) return true;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch (error) {
    return true;
  }
};

export const clearAuthData = () => {
  sessionStorage.removeItem('authToken');
  // Clear any other auth-related data if needed
}; 