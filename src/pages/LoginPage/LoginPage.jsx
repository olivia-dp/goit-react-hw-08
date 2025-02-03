import LoginForm from "../../components/LoginForm/LoginForm";



const LoginPage = () => {
  
return (
    <section  className="bg-gray-50 dark:bg-gray-900" style={{
    position: "absolute", 
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.9, 
    zIndex: "-1", 
  }} >
      <LoginForm />
    </section>
  );
};

export default LoginPage;
