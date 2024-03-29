import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import ProductForm from "./components/productForm/ProductForm";
import ProductListItem from "./components/productListItem/ProductListItem";

const App = () => {
  const [products, setProducts] = useState([]);
  const addProduct = (product) => {
    setProducts([...products, product]);
    // alert(`${product.name} is added successfully!`);
  };

  const deleteProduct = (product) => {
    setProducts(
      products.filter((productItem) => productItem.id !== product.id)
    );
    // alert(`${product.name} is removed successfully!`);
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // this method prevents the automatic reloading of the page
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); // This will update all the values that was passed through in the form
  };

  console.log(values);

  // Putting all the input values into an array of objects so that we can map through it and render it dynamically
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters abd should not include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$", //This is a regex code to handle the error message
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`, // This is a regez code
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm password",
      errorMessage: "Passwords don't match!",
      label: "Confirm password",
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <div className="App">
      <ProductForm addProductProp={addProduct} />
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          item={product}
          deleteProductProp={deleteProduct}
        />
      ))}

      {/* <form onSubmit={ handleSubmit } >
              <h1>Register Here!</h1>
              {inputs.map((input) => (
                // mapping through the objects with a unique key and returning the inputs using a spread operator
                <FormInput 
                      key={input.id} 
                      { ...input } 
                      value={values[input.name]}
                      onChange={ onChange }
                />  

              ))}
              <button> Submit </button>
        </form> */}
    </div>
  );
};

export default App;
