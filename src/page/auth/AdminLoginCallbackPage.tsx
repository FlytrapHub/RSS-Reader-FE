import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/Path";

export default function AdminLoginCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(import.meta.env.VITE_BASE_URL + '/admin/login', {
        code: import.meta.env.VITE_ADMIN_LOGIN_CODE
      }, {
        withCredentials: true
      })
      .then(function (response) {
        if (response.status == 201) {
            navigate(PATH.MAIN);
        } else {
            throw new Error('Authentication failed');
        }
      })
      .catch(function (error) {
        console.log('error: {}', error)
        navigate(PATH.AUTH.LOGIN);
      });

  }, [navigate]);

  return <div></div>;
}
