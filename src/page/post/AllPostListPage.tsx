import AllPostListContent from "../../component/content/AllPostListContent";
import Layout from "../../component/layout/Layout";

export default function AllPostListPage() {
    return (
        <>
            <Layout headerTitle={"전체 보기"}>
                <AllPostListContent />
            </Layout>
        </>
    );
}