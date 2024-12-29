const useAuth = () => {
  const user = { 
    name: "kms"
  };
  
  return {
    user,
    isAuth: user ? true : false,
  };
};

export default useAuth;