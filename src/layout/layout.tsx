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
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle/mode-toggle";
const Layout = () => {
  return (
    <>
      <div>
        <ModeToggle />
        <Button className="bg-red-500 text-white dark:bg-red-400 px-4 py-2 rounded-md hover:bg-red-600">
          Click me
        </Button>
      </div>
    </>
  );
};
export default Layout;
