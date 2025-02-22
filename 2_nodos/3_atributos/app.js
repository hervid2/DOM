const input = document.querySelector("input");
const contraseña = document.querySelector('input[type="password');
console.log(input);
console.log(input.type);
console.log(input.value);
console.log(input.placeholder);
console.log(contraseña);
input.value = "John Fredy";
console.log(contraseña.value ? 'lleno':'vacío');
contraseña.value = "123456";
contraseña.setAttribute("type","text" ); 








