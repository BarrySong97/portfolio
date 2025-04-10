"use client";

import { Provider } from "jotai";

export const GlobalProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider>{children}</Provider>;
};
