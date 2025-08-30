import ContentDisplay from "@/components/ContentDisplay";

export default async function ContentPage({ params: { contentId } }) {
  return <ContentDisplay id={contentId} />;
}
