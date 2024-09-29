"use client";

import React, { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="container mx-auto p-4 flex justify-center items-center">
      <NewItem />
    </main>
  );
}
