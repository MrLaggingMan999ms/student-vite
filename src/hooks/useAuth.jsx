const useAuth = () => {
  const user = { 
    name: "kms",
    key:
      "UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w"
  };
  
  return {
    user,
    isAuth: user ? true : false,
  };
};

export default useAuth;