"use client";

import { useEffect } from "react";

export default function addBootstrap() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
}
