import { useForm } from 'react-hook-form';
import { apiLogin, apiGetUserData } from '../api/Api';


function loginHandler(data) {
  let successLogin = apiLogin(data["username"], data["password"]);
  if (successLogin !== 1) return;

  localStorage.setItem("is_authorized", "authorized");
  localStorage.setItem("username", data["username"]);
  let userData = apiGetUserData(data["username"], data["password"]);
  localStorage.setItem("email", userData["email"]);
  localStorage.setItem("fullname", userData["fullname"]);
  localStorage.setItem("date_of_birth", userData["date_of_birth"]);
  window.location.href = "/account";
}

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <table style={{'tableLayout': 'fixed', 'width': '100%', 'height': '100%'}}>
      <tbody>
        <tr style={{"height": "33%"}}>
          <td style={{"width": "33%"}}></td>
          <td style={{"width": "33%"}}></td>
          <td style={{"width": "33%"}}></td>
        </tr>
        <tr style={{"height": "33%"}}>
          <td style={{"width": "33%"}}></td>
          <td style={{"width": "33%"}}>
            <form onSubmit={handleSubmit(loginHandler)}>
              <div>
                  <label>Username</label>
                  <input {...register('username', { required: true })} />
                  {errors.username && <p>Username is required.</p>}
              </div>
              <div>
                  <label>Password</label>
                  <input {...register('password', { pattern: /.......*/ })} />
                  {errors.password && <p>Password must be at least 6 symbols long.</p>}
              </div>
              <button>Log In</button>
            </form>
            <a href="/signup">
              <button>Sign Up</button>
            </a>
          </td>
          <td style={{"width": "33%"}}></td>
        </tr>
        <tr style={{"height": "33%"}}>
          <td style={{"width": "33%"}}></td>
          <td style={{"width": "33%"}}></td>
          <td style={{"width": "33%"}}></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Login;
