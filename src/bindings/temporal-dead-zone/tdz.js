{
  // Using let
  console.log(_bcLet);
  /* ==========
  * ===========
  * === TDZ ===
  * ===========
  =========== */
  let _bcLet = "🦕 Dinosaurs 🦖";

  //! Cannot access '_bc' before initialization
}

{
  // Using Const
  console.log(_bcConst);
  /* ==========
  * ===========
  * === TDZ ===
  * ===========
  =========== */
  const _bcConst = "🦕 Dinosaurs 🦖";

  //! Cannot access '_bc' before initialization
}

{
  // Using Var
  console.log(_bcVar);
  /* ==========
  * ===========
  * === TDZ ===
  * ===========
  =========== */
  var _bcVar = "🦕 Dinosaurs 🦖";

  //{} undefined
}