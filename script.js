
document.querySelector('.btn.log').addEventListener('click',function(){
    let email = document.querySelector(".input.email").value;
    let pass = document.querySelector('.input.pass').value;
    if(email == ""){
      let result =  document.querySelector('.error.email');
      result.style.display = "block";
    }
    if(pass == ""){
        let pass =  document.querySelector('.error.pass');
        pass.style.display = "block";
      }else if(pass.length < 8){
        let v = document.querySelector('.error.pass');
        v.innerHTML = "Password must contain atleast 8 characters";
        v.style.display = "block";
      }
});
