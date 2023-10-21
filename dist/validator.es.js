function t(u) {
  if (!/^\d{13}$/.test(u))
    return !1;
  let i = 0;
  for (let e = 0; e < 12; e++)
    i += Number(u[e]) * (13 - e);
  return (11 - i % 11) % 10 === Number(u[12]);
}
typeof module < "u" && typeof module.exports < "u" ? (module.exports = t, exports.default = t, exports.isValidThaiID = t) : window.isValidThaiID = t;
export {
  t as default
};
