// Add your code here
const dogUrl=`http://localhost:3000/dogs`
const catsUrl=`http://localhost:3000/cats`
const usersUrl=`http://localhost:3000/users`
const robotsUrl=`http://localhost:3000/robots`
const name=document.getElementById('name')
// let form=document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault()

// })
// const formData = {
//     name:e.target.name.value,
//     email:e.target.email.value,
//   };
  
  // method: "POST" is missing from the object below
  const configurationObject = {
    method:'POST',
    headers: {
    "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  //POST USERS FORM DATA
  const usersFormData = {
    name:"Steve",
    email:"steve@steve.com"
  };
  


    function submitData(name){
        return fetch(`http://localhost:3000/users/${name}`, configurationObject)
        .then(response=>response.json())
        .then(users=>users)

        .catch( (error)=>{
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });
    
    }
