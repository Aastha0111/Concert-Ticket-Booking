let user_details = [];
function registration()

{
  let user = new Object();

    user.name= document.getElementById("name2").value;
    user.email= document.getElementById("email2").value;
    user.mobile= document.getElementById("mobile2").value;
    user.pwd= document.getElementById("password2").value;
    user.cpwd = document.getElementById("confirmpassword2").value;

    var mobile_expression = /^[6-9]\d{9}$/    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters =  /^[A-Z][a-z]|[a-zA-Z]+( [a-zA-Z]+)+$/i;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if(user.name=='')
      {
        alert("Please enter your name");
       
      }

      else if(!letters.test(user.name))
      {
        alert("Name field required only alphabet characters");
        
      }
      else if (user.mobile == '')
      {
        alert("Kindly fill this field.");
      
      }
        else if(!mobile_expression.test(user.mobile))
      {
        alert ('Enter a valid 10 digit number');
      }
      
      else if(user.email=='')
      {
        alert("Please enter your Email Id");
       
      }
      else if (!filter.test(user.email))
      {
        alert("Invalid Email");
       
      }
      else if (user.pwd == '')
      {
        alert("Password required.");
      
      }
        else if(!pwd_expression.test(user.pwd))
      {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
      }
        else if(user.pwd != user.cpwd)
      {
        alert("Password does not match.");
      }
     
      else {
        for (let i=0; i < user_details.length; i++) {
          if(user_details[i].email == document.getElementById('email2').value) {
            alert("Duplicate data..!")
            return
          }
        }
            user_details.push(user);
            localStorage.users = JSON.stringify(user_details)
            alert('Registered Successfully');
            window.location = "#login";
      }
}
    
function init() {
    if(localStorage.users) {
        user_details = JSON.parse(localStorage.users);
    }
}

function enter()
{
      let newEmail, newPwd;
      newEmail = document.getElementById("email").value;
      newPwd = document.getElementById("password").value;

      for (let i = 0; i < user_details.length; i++){

      if(user_details[i].email === newEmail && user_details[i].pwd === newPwd)
      {
        alert("Login Pass..!");
        window.location = "http://127.0.0.1:5501/book.html";
        return 
      } 
    }
     
        alert('Login Fail'); 
}
