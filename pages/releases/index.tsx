import Grid from "@xcritical/grid";
import type { GetServerSideProps, NextPage } from "next";
import sortBy from "lodash.sortby";
import Head from "next/head";
import JiraService, {
  JiraIssuesGroupedByVersionComponent,
} from "../../services/jira";

import styles from "../../styles/Home.module.css";
import { columns } from "../../utils/consts";
import {
  ContentWrapper,
  GridInner,
  GridWrapper,
} from "../../components/styled";
import { uniqBy } from "../../utils";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let components: string[] = ["CrmFront", "CrmFrontReact"];
  if (query["component"]) {
    components = Array.isArray(query["component"])
      ? query["component"]
      : query["component"].split(",");
  }
  const versions = await JiraService.issuesByComponent(components, true);

  return {
    props: {
      versions,
    },
  };
};

const Releases: NextPage<{ versions: JiraIssuesGroupedByVersionComponent }> = ({
  versions,
}) => {
  const issues = sortBy(
    uniqBy(Object.values(versions).flat(), "key"),
    (i) => i.version?.fullName
  );

  const components = Object.keys(versions).join(", ");
  return (
    <div className={styles.container}>
      <Head>
        <title>Jira Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapper>
        <GridWrapper>
          <h1>{components}</h1>
          <GridInner height={issues.length * 37 + 40}>
            <Grid
              rowHeight={37}
              columns={columns}
              items={issues}
              shouldFitContainer
            />
          </GridInner>
        </GridWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Releases;
