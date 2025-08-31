import ContentDisplay from "@/components/ContentDisplay";
import { getSortedDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/docs-util";

export default function AuthorPage({ params: { name } }) {
  const docs = getSortedDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);

  return <ContentDisplay id={matchedDocs[0]?.id} />;
}
