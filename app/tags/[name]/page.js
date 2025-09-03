import ContentDisplay from "@/components/ContentDisplay";
import { getSortedDocuments } from "@/lib/doc";
import { getDocumentsByTags } from "@/utils/docs-util";

export default async function TagsPage({ params: { name } }) {
  const docs = await getSortedDocuments();
  const matchedDocs = getDocumentsByTags(docs, name);

  return <ContentDisplay id={matchedDocs[0]?.id} />;
}
