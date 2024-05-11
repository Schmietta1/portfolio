import type { FC } from "react";

interface LinkToPdfProps {
  pdfUrl: string;
  linkText?: string;
}

const LinkToPdf: FC<LinkToPdfProps> = ({
  pdfUrl,
  linkText = "Download PDF",
}) => {
  return (
    <div>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  );
};

export default LinkToPdf;
