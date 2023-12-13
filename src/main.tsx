import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    cookieStorage: {
      // - Cookie domain (only required if cookieStorage is provided)
      domain: "release.d1udccktqkrrlq.amplifyapp.com",
      // (optional) - Cookie path
      path: "/",
      // (optional) - Cookie expiration in days
      expires: 365,
      // (optional) - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      sameSite: "strict",
      // (optional) - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
