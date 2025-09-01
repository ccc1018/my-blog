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
import Login from "@/pages/login/login";
import Register from "@/pages/register";
import Error500 from "@/pages/Error";
import NotFound from "@/pages/Notfound";
import { createBrowserRouter } from "react-router";
import Layout from "@/layout/layout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/dashboard",
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/500",
    Component: Error500,
  },
]);
