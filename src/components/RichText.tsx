import { Fragment } from "react";
import { Link } from "react-router-dom";

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Renders plain text with inline internal links written as [Text](/pfad). */
const RichText = ({ text }: { text: string }) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(<Link key={i} to={m[2]} className="font-medium text-primary underline-offset-2 hover:underline">{m[1]}</Link>);
    last = i + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
};

export const stripLinks = (text: string) => text.replace(LINK, "$1");

export default RichText;
