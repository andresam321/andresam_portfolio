import { useEffect } from "react";

const SITE_NAME = "Andres Mercado";

// Small dependency-free replacement for react-helmet: sets document.title
// (and an optional meta description) per route so each page has a
// meaningful, distinct title rather than the static "AM" from the CRA
// template.
const useDocumentTitle = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
};

export default useDocumentTitle;
