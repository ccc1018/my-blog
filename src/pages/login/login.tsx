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
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { ModeToggle } from "@/components/toggle/mode-toggle";
import { useShadcn } from "@/hook/web/useShadcn";
import "./login.less";
import { useTranslation } from "react-i18next";
import { I18nIcon } from "@/components/I18nIcon";
const Login = () => {
  const { prefixCls } = useShadcn("login");
  const { t } = useTranslation();
  return (
    <div className={`${prefixCls} relative w-full h-full px-4`}>
      <div className="container relative h-full py-2 mx-auto sm:px-10">
        <div className="bg-accent rounded-3xl px-3 px-y py-1 flex-center absolute right-2 top-4 z-10">
          <div className="group flex items-center overflow-hidden">
            {/* <Button className="flex-center flex-shrink-0">
              <svg
                className="h-3.5 w-3.5 text-white"
                height="1em"
                viewBox="0 0 15 15"
                width="1em"
              >
                <path
                  clip-rule="evenodd"
                  d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007l3.849-5.886a.625.625 0 0 1 .865-.181"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </Button> */}
            <ModeToggle />
            <I18nIcon />
          </div>
        </div>
        <div className="flex h-full">
          <div className="relative flex-1 hidden w-0 lg:block"></div>
          <div className="flex-col-center dark:bg-background-deep bg-background relative px-6 py-10 lg:flex-initial lg:px-8 min-h-full w-[34%] flex-1">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        {t("ForgotPassoword")}
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </div>
              </form>
              <CardAction>
                <Link to="/register">
                  <Button variant="link" className="text-white">
                    {t("sys.login.signUpFormTitle")}
                  </Button>
                </Link>
              </CardAction>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full text-white">
                Login
              </Button>

              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
