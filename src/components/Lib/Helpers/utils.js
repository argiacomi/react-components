export function ownerDocument(node) {
  return (node && node.ownerDocument) || document;
}

export function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}