export function typedObjectMap(en: {}) {
  const keys = Object.keys(en) as Array<keyof typeof en>;
  const values = (Object.keys(en) as Array<keyof typeof en>).map(k => en[k]);

  return { keys, values };
}
