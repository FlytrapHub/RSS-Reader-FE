import BookmarkListContent from "../../component/content/BookmarkListContent";
import Layout from "../../component/layout/Layout";

export default function BookmarkListPage() {
    return (
        <>
            <Layout headerTitle={"북마크"}>
                <BookmarkListContent />
            </Layout>
        </>
    );
}