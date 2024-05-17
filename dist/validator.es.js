function u(e) {
  if (/^\d{13}$/.test(e)) {
    if (e[0] === 0)
      return !1;
  } else
    return !1;
  let s = 0;
  for (let t = 0; t < 12; t++)
    s += Number(e[t]) * (13 - t);
  return (11 - s % 11) % 10 === Number(e[12]);
}
typeof module < "u" && typeof module.exports < "u" ? (module.exports = u, exports.default = u, exports.isValidThaiID = u) : window.isValidThaiID = u;
export {
  u as default
};
