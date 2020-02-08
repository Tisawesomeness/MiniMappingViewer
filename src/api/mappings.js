import { sendError } from "src/api/notify";

const parseMojang = input => {
  let mojangToObf = {};
  let obfToMojang = {};

  let currMojang = null;
  let currObf = null;

  let parts = null;
  input.split("\n").forEach(line => {
    if (line.startsWith("#") || line === "") {
      // comment
    } else if (line.startsWith("\t") || line.startsWith("    ")) {
      // member

      // check for line numbers
      if (line.indexOf(":") !== -1) {
        parts = line.split(":");
        if (parts && parts.length === 3) {
          line = parts[2];
        } else {
          sendError("Invalid member line (wlc): '" + line + "'");
        }
      } else {
        line = line.substring(4);
      }

      // method or field?
      if (line.indexOf("(") !== -1) {
        parts = line.split(" ");
        if (parts && parts.length === 4) {
          // TODO properly parse params here
          let mojangName = parts[1].substring(0, parts[1].indexOf("("));
          let params = parts[1].substring(
            parts[1].indexOf("(") + 1,
            parts[1].indexOf(")")
          );
          currMojang.members[mojangName] = {
            type: "method",
            returnType: parts[0],
            mojang: mojangName,
            obf: parts[3],
            params: params
          };
          currObf.members[parts[3]] = {
            type: "method",
            returnType: parts[0],
            mojang: mojangName,
            obf: parts[3],
            params: params
          };
        } else {
          sendError("Invalid member line (m): '" + line + "'");
        }
      } else {
        parts = line.split(" ");
        if (parts && parts.length === 4) {
          currMojang.members[parts[1]] = {
            type: "field",
            dataType: parts[0],
            mojang: parts[1],
            obf: parts[3]
          };
          currObf.members[parts[3]] = {
            type: "field",
            dataType: parts[0],
            mojang: parts[1],
            obf: parts[3]
          };
        } else {
          sendError("Invalid member line (f): '" + line + "'");
        }
      }
    } else {
      // class
      if (currMojang && currObf) {
        mojangToObf[currMojang.mojang] = currMojang;
        obfToMojang[currObf.obf] = currObf;
      }

      parts = line.split(" -> ");
      if (!parts || parts.length !== 2) {
        sendError("Invalid class line: '" + line + "'");
      } else {
        currMojang = {
          mojang: parts[0],
          obf: parts[1].substring(0, parts[1].length - 1),
          members: {}
        };
        currObf = {
          mojang: parts[0],
          obf: parts[1].substring(0, parts[1].length - 1),
          members: {}
        };
      }
    }
  });

  return {
    mojangToObf: mojangToObf,
    obfToMojang: obfToMojang
  };
};

export { parseMojang };
