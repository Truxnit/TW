import { useEffect } from "react";

export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = `Two Worlds P&P - ${title}`;
  }, [title]);
};
