import React from "react";
import ListSkeleton from "./ListSkeleton";
import Advertisements from "./Advertisements";
import Search from "./Search";
import css from "./Advertisements.module.css";

function HomePage() {
  return (
    <div>
      <h1>Header</h1>
      <div className={css.container}>
        <Search></Search>
        <React.Suspense fallback={<ListSkeleton />}>
          <Advertisements />
        </React.Suspense>
      </div>
    </div>
  );
}

export default HomePage;
