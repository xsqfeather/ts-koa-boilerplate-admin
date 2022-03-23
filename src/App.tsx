import { Admin, Resource, ListGuesser } from "react-admin";

import authProvider from "./authProvider";
import themeReducer from "./themeReducer";
import { Login, Layout } from "./layout";
import { Dashboard } from "./dashboard";
import polyglotI18nProvider from "ra-i18n-polyglot";
import customRoutes from "./routes";
import englishMessages from "./i18n/en";
import dataProvider from "./dataProvider";

import { BlockRuleCreate } from "./resources/block_rules/BlockRuleCreate";
import { BlockRuleList } from "./resources/block_rules/BlockRuleList";
import { ArticleCreate } from "./resources/articles/ArticleCreate";
import { ArticleEdit } from "./resources/articles/ArticleEdit";
import { ArticleList } from "./resources/articles/ArticleList";
import { AuthorCreate } from "./resources/authors/AuthorCreate";
import { AuthorEdit } from "./resources/authors/AuthorEdit";
import { AuthorList } from "./resources/authors/AuthorList";
import visitors from "./resources/visitors";
import orders from "./resources/orders";
import invoices from "./resources/invoices";
import products from "./resources/products";
import categories from "./resources/categories";
import reviews from "./resources/reviews";
import storageDirs from "./resources/storageDirs";
import videoCollectors from "./resources/videoCollectors";
import VodResources from "./resources/VodResources";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "fr") {
    return import("./i18n/fr").then((messages) => messages.default);
  }

  // Always fallback on english
  return englishMessages;
}, "en");

const App = (): JSX.Element => (
  <Admin
    title=""
    customReducers={{ theme: themeReducer }}
    customRoutes={customRoutes}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={Login}
    layout={Layout}
    i18nProvider={i18nProvider}
    disableTelemetry
    dataProvider={dataProvider("http://localhost:8001/api/v1")}
  >
    <Resource
      name="articles"
      list={ArticleList}
      create={ArticleCreate}
      edit={ArticleEdit}
    />
    <Resource
      name="authors"
      list={AuthorList}
      create={AuthorCreate}
      edit={AuthorEdit}
    />
    <Resource
      name="block_rules"
      list={BlockRuleList}
      create={BlockRuleCreate}
    />
    <Resource name="customers" {...visitors} />
    <Resource name="commands" {...orders} options={{ label: "Orders" }} />
    <Resource name="invoices" {...invoices} />
    <Resource name="products" {...products} />
    <Resource name="categories" {...categories} />
    <Resource name="reviews" {...reviews} />
    <Resource name="storageDirs" {...storageDirs} />
    <Resource name="storageFiles" {...storageDirs} />
    <Resource name="videoCollectors" {...videoCollectors} />
    <Resource name="vodResources" {...VodResources} />
  </Admin>
);

export default App;
