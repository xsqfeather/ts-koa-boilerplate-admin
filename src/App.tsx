import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { BlockRuleCreate } from "./resources/block_rules/BlockRuleCreate";
import { BlockRuleList } from "./resources/block_rules/BlockRuleList";
import { ArticleCreate } from "./resources/articles/ArticleCreate";
import { ArticleEdit } from "./resources/articles/ArticleEdit";
import { ArticleList } from "./resources/articles/ArticleList";
import { AuthorCreate } from "./resources/authors/AuthorCreate";
import { AuthorEdit } from "./resources/authors/AuthorEdit";
import { AuthorList } from "./resources/authors/AuthorList";

const App = (): JSX.Element => (
  <Admin dataProvider={dataProvider("http://localhost:8001/api/v1")}>
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
