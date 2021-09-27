import Grid from "@xcritical/grid";
import parse from "date-fns/parse";

import format from "date-fns/format";
import type { GetServerSideProps, NextPage } from "next";
import sortBy from "lodash.sortby";
import Head from "next/head";
import JiraService, {
  JiraIssueModel,
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
  ).reduce<Record<string, JiraIssueModel[]>>((acc, item) => {
    const releaseDate = item.version?.userReleaseDate
      ? format(
          parse(item.version?.userReleaseDate, "dd/LLL/yy", new Date()),
          "EEEE, dd MMMM yyyy"
        )
      : "No release date";
    if (!acc[releaseDate]) {
      acc[releaseDate] = [];
    }
    acc[releaseDate].push(item);
    return acc;
  }, {});

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
          {Object.entries(issues).map(([date, issueList]) => (
            <>
              <h2>{date}</h2>
              <GridInner height={issueList.length * 37 + 40}>
                <Grid
                  rowHeight={37}
                  columns={columns}
                  items={issueList}
                  shouldFitContainer
                />
              </GridInner>
            </>
          ))}
        </GridWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Releases;
