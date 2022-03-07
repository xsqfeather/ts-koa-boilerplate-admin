import { Admin, Resource } from "react-admin";

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
  </Admin>
);

export default App;
