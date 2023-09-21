function c(t) {
  if (!/^\d{13}$/.test(t))
    return !1;
  let u = 0;
  for (let e = 0; e < 12; e++)
    u += Number(t[e]) * (13 - e);
  return (11 - u % 11) % 10 === Number(t[12]);
}
export {
  c as default
};
