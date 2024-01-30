import queryString from "query-string";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GitHubCallbackPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const code = queryString.parse(location.search).code;
    const body = {
      code: code,
    };

    console.log("code : " + code)

    // axios
    //   .post(import.meta.env.VITE_BASE_URL + API_PATH.AUTH.LOGIN, 
    //   body, 
    //   {
    //     withCredentials: true
    //   })
    //   .then(function (response) {
    //     if (response.status == 200) {
    //         const responseData: StoredMemberInfo = response.data.data;
    //         localStorage.setItem('MEMBER_INFO', JSON.stringify(responseData));

    //         navigate(PATH.MAIN);
    //     } else {
    //         throw new Error('Authentication failed');
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log('error: {}', error)
    //     navigate(PATH.AUTH.LOGIN);
    //   });

  }, [navigate]);

  return <div></div>;
}
