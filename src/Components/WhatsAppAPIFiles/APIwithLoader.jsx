import { useEffect, useState } from "react";
import APIService from "../Pages/WABA.jsx";
import Loader2 from "../Common/Loader2.jsx";

function WebsiteDevWithLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <Loader2 /> : <APIService />;
}

export default WebsiteDevWithLoader;
