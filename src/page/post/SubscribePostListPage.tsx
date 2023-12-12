import { useLocation } from "react-router-dom";
import SubscribePostListContent from "../../component/content/SubscribePostListContent";
import Layout from "../../component/layout/Layout";

export default function SubscribePostListPage() {
    
  const location = useLocation();
  const data = location.state;
  const key = data? data.subscribeId : null;

  return (
    <div key={key}>
      <Layout headerTitle={data.subscribeTitle}>
        <SubscribePostListContent subscribeId={data.subscribeId} />
      </Layout>
    </div>
  );
}
