import { Await, useLoaderData } from "react-router-dom";
import React from "react";
import ListSkeleton from "./ListSkeleton";
import Advertisements from "./Advertisements";
import Search from "./Search";
import css from './Advertisements.module.css'


function HomePage() {
  return (
    <div>
      <h1>Header</h1>
      <Search></Search>
      <React.Suspense fallback={<ListSkeleton />}>
            <Advertisements />
      </React.Suspense>
    </div>
  );
}

export default HomePage;

