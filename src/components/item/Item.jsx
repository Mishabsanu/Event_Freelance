import React from "react";
import { Link } from "react-router-dom";

import { items } from "../../utils/consts";

const Item = () => {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src={item.imageUrl}
            alt={`Image ${index + 1}`}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{item.name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <Link to={`/viewDetails/${item.id}`}>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Details &rarr;
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
