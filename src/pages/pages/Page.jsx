import { Navigate, useParams } from "react-router-dom";
import { getPageById } from "../helpers";
import { useMemo } from "react";

export const Page = () => {
  const { id } = useParams();
  const page = useMemo(() => getPageById(id), [id]);

  if (!page) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page-content" style={{ marginTop: '10px' }}>
      <iframe
        src={page.url}
        title={page.name}
        style={{ width: '100%', height: 'calc(100vh - 55px)', border: 'none', margin: 0 }}
      />
    </div>
  );
}


