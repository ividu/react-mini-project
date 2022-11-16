import React, {PureComponent} from 'react';
import Layout from "../../common/Layout/Layout";
import AllResults from "./components/AllResults/AllResults";

import './SearchResult.scss';

class SearchResult extends PureComponent {
  render() {
    return (
      <Layout className="search-result" withHeader >
        <AllResults />
      </Layout>
    );
  }
}

export default SearchResult;
