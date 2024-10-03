"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tabs, TabsTrigger } from "./ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
