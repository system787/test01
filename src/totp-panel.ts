"use strict";
import * as totpGenerator from "totp-generator";

export class TotpPanel {
  passwordTable: Array<[string, string]>;

  // init() {
  // }

  reloadKeys(): void {
    console.log("Reload button pressed");
  }
}
