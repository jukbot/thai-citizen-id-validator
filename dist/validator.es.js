function t(i) {
  if (!/^\d{13}$/.test(i))
    return !1;
  let o = 0;
  for (let e = 0; e < 12; e++)
    o += Number(i[e]) * (13 - e);
  return (11 - o % 11) % 10 === Number(i[12]);
}
typeof module < "u" && typeof module.exports < "u" ? (module.exports = t, exports.default = t, exports.isValidThaiID = t) : typeof window < "u" && (window.isValidThaiID = t);
export {
  t as default
};
