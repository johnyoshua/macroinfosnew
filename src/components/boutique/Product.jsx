import React from "react";

import axios from "axios";

import { PlusIcon } from "@heroicons/react/solid";

import { Link } from "react-router-dom";

class Product extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get(`http://admin.macroinfos.com/api/articles`).then((res) => {
      const articles = res.data;
      this.setState({ articles });
    });
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-5 my-6 py-6 gap-2 md:gap-5">
          {this.state.articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded-xl shadow-lg dark:border-gray-700"
            >
              <div className="">
                <img
                  src={`http://admin.macroinfos.com/${article.imageUrl}`}
                  alt="/"
                />
              </div>
              <div className="py-2">
                <p className="text-md md:text-xl font-semibold">
                  {article.nom}
                </p>
                <div className="flex justify-between items-center py-2">
                  <h1 className="text-lg md:text-xl font-bold ">
                    ${article.prixUnitaire}
                  </h1>

                  <Link to={`/boutique/detail/${article.id}`}>
                    <PlusIcon className="h-5 w-5 teal" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Product;
