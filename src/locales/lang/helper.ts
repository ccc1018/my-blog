// Copyright 2025 20711
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { set } from "lodash-es";
export function getMessage(
  langs: Record<string, Record<string, unknown>>,
  prefix = "lang",
) {
  const obj: Unknown = {};
  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key] as { default: Unknown };
    let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
    const lastIndex = fileName.lastIndexOf(".");
    fileName = fileName.substring(0, lastIndex);
    const ketList = fileName.split("/");
    const moduleName = ketList.shift() as string;
    const objKey = ketList.join(".");

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}
