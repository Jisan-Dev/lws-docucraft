export default function SubContentPage({ params: { contentId, subContentId } }) {
  return (
    <div>
      page for content id : {contentId} & sub content id : {subContentId}
    </div>
  );
}
