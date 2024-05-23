import type { FC } from "react";
import AnimatedText from "./AnimatedText";

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
      <AnimatedText>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </AnimatedText>
    </div>
  );
};

export default LinkToPdf;
